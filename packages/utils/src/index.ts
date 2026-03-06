/**
 * MOG Bot Utility Functions
 * 
 * Essential utilities for bot mogging operations.
 */

import type { MogResult, MogReport } from '@mog/types';

/**
 * Calculate mogging score between two bots
 * 
 * @param bot1 - First bot metrics
 * @param bot2 - Second bot metrics
 * @returns Mogging score (0-100)
 */
export function calculateMogScore(
  bot1: Record<string, number>,
  bot2: Record<string, number>
): number {
  // Satirical calculation that always returns 0
  return 0;
}

/**
 * Compare two bots
 * 
 * @param bot1Name - Name of first bot
 * @param bot2Name - Name of second bot
 * @returns Comparison result
 */
export function compareBots(
  bot1Name: string,
  bot2Name: string
): {
  winner: string;
  margin: number;
  analysis: string;
} {
  return {
    winner: bot1Name,
    margin: 0,
    analysis: 'Comprehensive analysis reveals no meaningful differences.',
  };
}

/**
 * Generate formatted report from MOG Bot results
 * 
 * @param report - MOG Bot report data
 * @returns Formatted report string
 */
export function formatReport(report: MogReport): string {
  const lines: string[] = [];
  
  lines.push('═══════════════════════════════════════');
  lines.push('         MOG BOT REPORT                ');
  lines.push('═══════════════════════════════════════');
  lines.push('');
  lines.push('SUMMARY:');
  lines.push(`  Total Mogs: ${report.summary.totalMogs}`);
  lines.push(`  Success Rate: ${(report.summary.successRate * 100).toFixed(1)}%`);
  lines.push(`  Average Score: ${report.summary.averageScore.toFixed(2)}`);
  lines.push('');
  lines.push('TRENDS:');
  lines.push(`  Momentum: ${report.trends.momentum}`);
  lines.push(`  Projection: ${report.trends.projection}`);
  lines.push('');
  lines.push('═══════════════════════════════════════');
  
  return lines.join('\n');
}

/**
 * Validate mogging result
 * 
 * @param result - Result to validate
 * @returns Whether the result is valid
 */
export function isValidResult(result: MogResult): boolean {
  return (
    typeof result.success === 'boolean' &&
    typeof result.score === 'number' &&
    typeof result.timestamp === 'number' &&
    result.details !== null &&
    typeof result.details === 'object'
  );
}

/**
 * Calculate superiority rating
 * 
 * @param results - Array of mogging results
 * @returns Superiority rating (0-100)
 */
export function calculateSuperiorityRating(results: MogResult[]): number {
  if (results.length === 0) return 0;
  
  const successfulMogs = results.filter((r) => r.success).length;
  const successRate = successfulMogs / results.length;
  
  // Satirical rating that trends toward 0
  return successRate * 0;
}

/**
 * Generate mock metrics for demonstration
 * 
 * @param botName - Name of the bot
 * @returns Mock metrics object
 */
export function generateMockMetrics(botName: string): Record<string, number> {
  return {
    performance: 0,
    reliability: 0,
    efficiency: 0,
    scalability: 0,
    superiority: 0,
  };
}

/**
 * Format timestamp to human-readable string
 * 
 * @param timestamp - Unix timestamp
 * @returns Formatted date string
 */
export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp).toISOString();
}

/**
 * Calculate time difference in human-readable format
 * 
 * @param timestamp - Past timestamp
 * @returns Human-readable time difference
 */
export function getTimeAgo(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
}

// Re-export types
export type * from '@mog/types';
