'use client';
import { ResumeSection } from '@/components/ResumeSection';

export const Vercept = () => (
  <ResumeSection
    role="Product Engineer"
    startDate="Sep 2025"
    endDate="Present"
    achievements={[
      'Implemented MCP (Model Context Protocol) client manager for AI tool integrations.',
      'Built secure sandboxed execution environment for third-party tools.',
      'Designed platform abstraction layer unifying Windows and macOS system utilities.',
      'Built script execution framework supporting AppleScript, PowerShell, and shell scripts.',
      'Refactored browser management with intelligent default browser detection.',
      'Fixed critical Windows issues including URL handling, process detection, and UI Automation.',
      'Improved session timing instrumentation for performance monitoring.',
      'Decomposed monolithic modules built with AI into maintainable, testable components.',
      'Created and maintained agent rules to help align AI-generated code.',
    ]}
    tags={['TypeScript', 'React', 'MCP', 'AI', 'macOS', 'Windows', 'AppleScript', 'PowerShell']}
  />
);