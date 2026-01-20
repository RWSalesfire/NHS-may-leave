# NHS Maternity Pay Calculator

A mobile-first React Native app that calculates NHS maternity pay with actual take-home (net) amounts after tax, National Insurance, and pension deductions.

## Features

- **Accurate Calculations**: Based on 2025/26 UK tax rates and NHS maternity pay rules
- **Net Pay Display**: Shows actual take-home amounts after all deductions
- **Detailed Breakdown**: View weekly, monthly, and total maternity pay
- **Clean UI**: Professional design inspired by Calm app aesthetic with NHS-branded colors
- **Input Validation**: Ensures accurate salary and pension percentage inputs

## How It Works

The calculator implements UK Statutory Maternity Pay (SMP) rules:

- **First 6 weeks**: 90% of average weekly earnings
- **Next 33 weeks**: £184.03 per week or 90% of average weekly earnings (whichever is lower)
- **Total duration**: 39 weeks

### Deductions Calculated

1. **Income Tax**: Based on UK tax bands (Personal Allowance, Basic Rate, Higher Rate, Additional Rate)
2. **National Insurance**: Employee contributions at 8% (£12,570-£50,270) and 2% (above £50,270)
3. **Pension Contributions**: Configurable percentage (typical NHS pension is 5-13.5%)

## Installation

```bash
# Install dependencies
npm install

# Start the app
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## Project Structure

```
├── App.js                              # Main app component
├── src/
│   ├── components/
│   │   ├── CalculatorInput.js         # Input form component
│   │   └── ResultsDisplay.js          # Results display component
│   ├── constants/
│   │   └── theme.js                   # NHS color palette and theme
│   └── utils/
│       └── maternityCalculations.js   # Calculation logic
```

## Usage

1. Enter your annual salary
2. Enter your pension contribution percentage (default is 5%)
3. Tap "Calculate" to see your results
4. View your net take-home maternity pay broken down by week and month
5. See detailed gross pay and deductions breakdown

## Color Palette

The app uses a calming NHS-branded color scheme:

- **Primary**: Soft NHS Blue (#6B9BD1)
- **Accent**: Soft Coral (#FFB5A0)
- **Background**: Light Gray (#F8FAFB)
- **Text**: Dark Gray (#2C3E50)
- **Success**: Soft Green (#7FD4A8)

## Technical Details

- Built with React Native and Expo
- Mobile-first responsive design
- Supports iOS, Android, and Web platforms
- Uses SafeAreaView for proper spacing on all devices
- Keyboard-aware input handling

## Requirements

- Node.js 14+
- npm or yarn
- Expo CLI (automatically installed)
- For iOS: macOS with Xcode or Expo Go app
- For Android: Android Studio or Expo Go app

## Future Enhancements

- Save calculations history
- Export results as PDF
- Compare multiple scenarios
- Support for different maternity leave durations
- Additional pay types (e.g., Maternity Allowance, Enhanced Maternity Pay)

## License

MIT

## Disclaimer

This calculator provides estimates based on standard UK tax rates and NHS maternity pay rules. Actual take-home pay may vary based on individual circumstances. Please consult with your HR department or financial advisor for personalized advice.
