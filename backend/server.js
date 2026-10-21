const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dataDir = path.join(__dirname, 'data');
const dbPath = path.join(dataDir, 'creative-academy.db');

fs.mkdirSync(dataDir, { recursive: true });

const db = new sqlite3.Database(dbPath);

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

function initDatabase() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(
        `CREATE TABLE IF NOT EXISTS stories (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          genre TEXT NOT NULL,
          subgenre TEXT,
          tone TEXT,
          synopsis TEXT,
          content TEXT NOT NULL,
          tags TEXT,
          status TEXT DEFAULT 'draft',
          word_count INTEGER DEFAULT 0,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP,
          updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        );`,
        (err) => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  });
}

async function createStory(story) {
  const {
    title,
    genre,
    subgenre = '',
    tone = '',
    synopsis = '',
    content,
    tags = '',
    status = 'draft',
  } = story;

  const wordCount = (content || '').trim().split(/\s+/).filter(Boolean).length;

  const result = await run(
    `INSERT INTO stories (title, genre, subgenre, tone, synopsis, content, tags, status, word_count, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
    [title, genre, subgenre, tone, synopsis, content, tags, status, wordCount]
  );

  return getStoryById(result.id);
}

async function getAllStories() {
  return all(`SELECT * FROM stories ORDER BY updated_at DESC, created_at DESC`);
}

async function getStoryById(id) {
  return get(`SELECT * FROM stories WHERE id = ?`, [id]);
}

async function updateStory(id, updates) {
  const fields = [];
  const params = [];

  Object.entries(updates).forEach(([key, value]) => {
    if (value !== undefined) {
      fields.push(`${key} = ?`);
      params.push(value);
    }
  });

  if (!fields.length) {
    return getStoryById(id);
  }

  if (updates.content !== undefined) {
    const content = updates.content || '';
    fields.push('word_count = ?');
    params.push(content.trim().split(/\s+/).filter(Boolean).length);
  }

  fields.push('updated_at = CURRENT_TIMESTAMP');
  params.push(id);

  await run(`UPDATE stories SET ${fields.join(', ')} WHERE id = ?`, params);
  return getStoryById(id);
}

async function deleteStory(id) {
  return run(`DELETE FROM stories WHERE id = ?`, [id]);
}

function storiesToCsv(stories) {
  const fields = [
    'id',
    'title',
    'genre',
    'subgenre',
    'tone',
    'synopsis',
    'content',
    'tags',
    'status',
    'word_count',
    'created_at',
    'updated_at',
  ];

  const escape = (value) => {
    const text = value === null || value === undefined ? '' : String(value);
    return `"${text.replace(/"/g, '""')}"`;
  };

  const rows = stories.map((story) =>
    fields.map((field) => escape(story[field])).join(',')
  );

  return [fields.join(','), ...rows].join('\n');
}

module.exports = {
  db,
  initDatabase,
  createStory,
  getAllStories,
  getStoryById,
  updateStory,
  deleteStory,
  storiesToCsv,
};
