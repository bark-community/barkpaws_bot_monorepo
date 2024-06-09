# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Initial release of the BarkPaws Telegram Bot with core features:
  - User authentication and registration.
  - Token swap functionality on the Solana blockchain using Solana Token-2022 standard.
  - Real-time trade monitoring with notifications.
  - Support for humanitarian aid initiatives and fundraising campaigns.
  - Donation features with BARK tokens.
  - 24/7 support through the Telegram bot.
  - User settings and preferences.
  - Governance participation with BARK tokens.
  - Internationalization support with `i18next`.

### Changed
- Enhanced security measures, including token locking and multi-signature accounts.
- Improved user interface and user experience.
- Added slippage tolerance for token swaps.
- Improved error handling for insufficient liquidity and failed transactions.
- Optimized transaction fee calculations.

### Fixed
- Minor bug fixes and performance improvements.

## [0.1.1] - 2024-06-15

### Added
- Added anti-bot mechanisms to prevent spam and automated misuse of the bot.
- Added a new logo to the assets folder.

### Changed
- Updated the README.md with detailed installation and usage instructions.
- Updated the folder structure for better organization and maintainability.
- Improved translation files for better internationalization support.
- Enhanced swap logic with better fee calculations and error handling.

### Fixed
- Fixed issues with user state management in multi-step interactions.
- Resolved problems with MongoDB connections in certain environments.

## [0.1.0] - 2024-06-01

### Added
- Basic authentication and swap endpoints.
- Initial setup for Telegram bot integration.
- Basic swap and status checking functionality.
- Initial set of translations for English.
- Basic middleware for user authentication.
- Initial project structure and configuration files.
