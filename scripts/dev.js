#!/usr/bin/env node

/**
 * dev.js
 * Task Master CLI - AI-driven development task management
 *
 * This is the refactored entry point that uses the modular architecture.
 * It imports functionality from the modules directory and provides a CLI.
 */

import dotenv from 'dotenv';
dotenv.config();

// Add at the very beginning of the file
if (process.env.DEBUG === '1') {
	console.error('DEBUG - dev.js received args:', process.argv.slice(2));
}

// --- MCP SERVER SUBCOMMAND SUPPORT ---
if (process.argv[2] === 'mcp-server') {
  await import('../mcp-server/server.js');
  // Prevent further CLI logic from running; keep the process alive
  await new Promise(() => {});
}
// --- END MCP SERVER SUBCOMMAND SUPPORT ---

import { runCLI } from './modules/commands.js';

// Run the CLI with the process arguments
runCLI(process.argv);
