#!/usr/bin/env python3
"""
Simple helper to append entries to assistant_context.json modification_log.
Usage:
  python scripts/update_assistant_context.py --files file1,file2 --desc "Short description" --agent "assistant"

This script is intentionally minimal and performs a read/modify/write of the JSON.
"""
import argparse
import json
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CTX_PATH = ROOT / 'assistant_context.json'

def load_context():
    with CTX_PATH.open('r', encoding='utf-8') as f:
        return json.load(f)

def save_context(ctx):
    with CTX_PATH.open('w', encoding='utf-8') as f:
        json.dump(ctx, f, indent=2, ensure_ascii=False)

def main():
    p = argparse.ArgumentParser()
    p.add_argument('--files', default='', help='Comma-separated list of files changed')
    p.add_argument('--desc', required=True, help='Short description of the change')
    p.add_argument('--agent', default='assistant', help='Agent name')
    args = p.parse_args()

    ctx = load_context()
    entry = {
        'date': datetime.utcnow().isoformat() + 'Z',
        'files_changed': [s.strip() for s in args.files.split(',') if s.strip()],
        'description': args.desc,
        'agent': args.agent
    }
    ctx.setdefault('modification_log', []).append(entry)
    save_context(ctx)
    print('Appended entry to assistant_context.json')

if __name__ == '__main__':
    main()
