# Mobile Router React Application

A modern, responsive mobile-first React application with a bottom navigation bar and optimized routing system.

## Features

- Mobile-first design with bottom navigation
- Optimized routing with React Router v6
- Responsive layout that works on all screen sizes
- Easy-to-customize navigation items
- Smooth transitions between routes
- Font Awesome icons integration
- CSS modules for scoped styling

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [project-directory]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Configuration

### Navigation Items
You can customize the navigation items by modifying the `navigationConfig` in `src/config/navigation.js`:

```javascript
export const navigationConfig = [
  {
    path: '/',
    label: 'Home',
    icon: 'fa-home'
  },
  // Add more items as needed
];
```

### Styling
The application uses CSS modules for styling. You can modify the styles in:
- `src/components/MobileRouter.css`
- `src/components/MobileNav.css`

## Production Build

To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `build` directory.

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy the contents of the `build` directory to your hosting service.

## Maintenance

### Updating Dependencies
Regularly update dependencies to keep the application secure and up-to-date:

```bash
npm update
```

### Adding New Routes
1. Create a new component in `src/components`
2. Add the route to `MobileRouter.jsx`
3. Add the navigation item to `navigationConfig`

### Performance Optimization
- The application uses React.lazy for code splitting
- Images are optimized using the `loading="lazy"` attribute
- CSS is modularized to prevent style conflicts

## Troubleshooting

### Common Issues

1. **Navigation not working**
   - Check if all routes are properly defined in `MobileRouter.jsx`
   - Verify that the path in `navigationConfig` matches the route path

2. **Icons not showing**
   - Ensure Font Awesome is properly imported
   - Check if the icon class names are correct

3. **Styling issues**
   - Verify that CSS modules are properly configured
   - Check for any conflicting styles

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 