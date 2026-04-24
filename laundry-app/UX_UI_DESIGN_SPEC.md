# Laundry Service Booking App - Comprehensive UX/UI Design Specification

## Executive Summary

This document outlines a complete UX/UI redesign for a web-based laundry service booking application. The design focuses on creating an intuitive, accessible, and visually appealing multi-step booking flow that works seamlessly across desktop and mobile devices.

---

## 1. Design System & Visual Identity

### 1.1 Color Palette

#### Primary Colors
```css
--primary-50: #eff6ff;    /* Lightest background */
--primary-100: #dbeafe;   /* Subtle highlights */
--primary-200: #bfdbfe;   /* Disabled states */
--primary-300: #93c5fd;   /* Hover states */
--primary-400: #60a5fa;   /* Secondary actions */
--primary-500: #3b82f6;   /* Primary brand */
--primary-600: #2563eb;   /* Primary buttons (DEFAULT) */
--primary-700: #1d4ed8;   /* Active states */
--primary-800: #1e40af;   /* Dark mode primary */
--primary-900: #1e3a8a;   /* Text on light */
```

#### Neutral Colors
```css
--gray-50: #f9fafb;       /* Page background */
--gray-100: #f3f4f6;      /* Card backgrounds */
--gray-200: #e5e7eb;      /* Borders */
--gray-300: #d1d5db;      /* Disabled borders */
--gray-400: #9ca3af;      /* Placeholder text */
--gray-500: #6b7280;      /* Secondary text */
--gray-600: #4b5563;      /* Body text */
--gray-700: #374151;      /* Headings */
--gray-800: #1f2937;      /* Primary text */
--gray-900: #111827;      /* Darkest text */
```

#### Semantic Colors
```css
--success-light: #d1fae5;
--success: #10b981;
--success-dark: #059669;

--warning-light: #fef3c7;
--warning: #f59e0b;
--warning-dark: #d97706;

--error-light: #fee2e2;
--error: #ef4444;
--error-dark: #dc2626;

--info-light: #dbeafe;
--info: #3b82f6;
--info-dark: #2563eb;
```

### 1.2 Typography

#### Font Stack
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-heading: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

#### Type Scale
```css
/* Display */
--text-display-lg: 48px / 56px;   /* Hero sections */
--text-display-md: 40px / 48px;   /* Page titles */

/* Headings */
--text-h1: 32px / 40px;           /* Major sections */
--text-h2: 24px / 32px;           /* Section headers */
--text-h3: 20px / 28px;           /* Subsections */
--text-h4: 18px / 24px;           /* Card titles */

/* Body */
--text-body-lg: 18px / 28px;      /* Lead paragraphs */
--text-body: 16px / 24px;         /* Default body */
--text-body-sm: 14px / 20px;      /* Captions, labels */

/* Utility */
--text-xs: 12px / 16px;           /* Fine print */
--text-button: 16px / 20px;       /* Button text (medium weight) */
```

#### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 1.3 Spacing System

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### 1.4 Border Radius

```css
--radius-sm: 4px;     /* Small elements */
--radius-md: 8px;     /* Default */
--radius-lg: 12px;    /* Cards */
--radius-xl: 16px;    /* Large cards */
--radius-2xl: 24px;   /* Modals, popovers */
--radius-full: 9999px; /* Pills, avatars */
```

### 1.5 Shadows

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Interactive shadows */
--shadow-focus: 0 0 0 3px rgba(59, 130, 246, 0.5);
--shadow-focus-error: 0 0 0 3px rgba(239, 68, 68, 0.5);
```

### 1.6 Animations & Transitions

```css
/* Timing */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;

/* Easing */
--ease-out: cubic-bezier(0.33, 1, 0.68, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

/* Common transitions */
--transition-base: all var(--duration-normal) var(--ease-out);
--transition-fast: all var(--duration-fast) var(--ease-out);
--transition-colors: color var(--duration-fast) var(--ease-out), 
                     background-color var(--duration-fast) var(--ease-out),
                     border-color var(--duration-fast) var(--ease-out);
```

---

## 2. Component Library

### 2.1 Buttons

#### Primary Button
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  onClick?: () => void;
}
```

**Visual States:**
- **Default**: Primary color background, white text, subtle shadow
- **Hover**: Darker shade, elevated shadow
- **Active**: Pressed effect, scale 0.98
- **Focus**: Outline ring 3px
- **Disabled**: Gray background, reduced opacity, no pointer events
- **Loading**: Spinner replaces icon, disabled state

**Sizes:**
- `sm`: padding: 8px 16px, font-size: 14px, height: 36px
- `md`: padding: 12px 24px, font-size: 16px, height: 44px (DEFAULT)
- `lg`: padding: 16px 32px, font-size: 18px, height: 52px

#### Icon Button
```tsx
interface IconButtonProps {
  variant?: 'ghost' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  icon: React.ReactNode;
  label: string; // For accessibility
  onClick?: () => void;
}
```

### 2.2 Form Inputs

#### Text Input
```tsx
interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  required?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
}
```

**Visual States:**
- **Default**: Gray border (#e5e7eb), white background
- **Focus**: Primary border, focus ring
- **Error**: Red border, error message below
- **Disabled**: Gray background, no interactions
- **With Left Icon**: Icon inside input, padded left
- **With Right Element**: e.g., clear button, unit label

#### Textarea
```tsx
interface TextareaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  maxLength?: number;
  error?: string;
  hint?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}
```

#### Select Dropdown
```tsx
interface SelectProps {
  label: string;
  options: Array<{ value: string; label: string; icon?: React.ReactNode }>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}
```

**Enhanced Features:**
- Search functionality for long lists
- Grouped options support
- Multi-select capability
- Custom option rendering

### 2.3 Cards

#### Base Card
```tsx
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

**Variants:**
- `default`: White background, subtle shadow
- `elevated`: Larger shadow, hover lift effect
- `outlined`: No shadow, visible border

#### Selection Card (for items/services)
```tsx
interface SelectionCardProps {
  title: string;
  subtitle?: string;
  price: string;
  priceUnit?: string;
  image?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  quantity?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onSelect?: () => void;
}
```

**Features:**
- Checkmark indicator when selected
- Quantity controls embedded
- Price prominently displayed
- Image/icon support
- Hover elevation effect

### 2.4 Progress Indicators

#### Stepper (Multi-step Progress)
```tsx
interface StepperProps {
  steps: Array<{
    id: string;
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
  }>;
  currentStep: number;
  completedSteps?: number[];
  onStepClick?: (stepIndex: number) => void;
  variant?: 'horizontal' | 'vertical';
}
```

**Visual Design:**
- Circle with step number or checkmark
- Connecting line between steps
- Active step: Primary color, larger circle
- Completed step: Checkmark, primary color
- Future step: Gray, muted
- Clickable steps (optional): Navigate back

#### Progress Bar
```tsx
interface ProgressBarProps {
  progress: number; // 0-100
  showLabel?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}
```

#### Loading Spinner
```tsx
interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
}
```

### 2.5 Feedback Components

#### Toast Notifications
```tsx
interface ToastProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}
```

**Positions:**
- Top-right (default)
- Top-center
- Bottom-center (mobile)

#### Alert Banner
```tsx
interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  dismissible?: boolean;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}
```

#### Modal/Dialog
```tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
```

### 2.6 Data Display

#### Badge
```tsx
interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  icon?: React.ReactNode;
}
```

#### Avatar
```tsx
interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}
```

---

## 3. Layout & Navigation

### 3.1 Page Structure

```
┌─────────────────────────────────────────┐
│              Header                      │
│  ┌─────────────────────────────────┐    │
│  │ Logo │ Title │ Language Switch  │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│           Stepper (Progress)            │
│   ○────○────○────○                      │
│  Select Pick- Deli- Summary             │
│  Items  up   very                       │
├─────────────────────────────────────────┤
│                                         │
│            Main Content                 │
│                                         │
│   ┌───────────────────────────────┐    │
│   │                               │    │
│   │     Step-specific Content     │    │
│   │                               │    │
│   └───────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│          Bottom Action Bar              │
│  ┌─────────────────────────────────┐   │
│  │ [Back]                    [Next] │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### 3.2 Header

**Desktop:**
- Fixed position, sticky on scroll
- Logo + App name on left
- Language switcher on right
- Subtle shadow on scroll
- Height: 64px

**Mobile:**
- Simplified header
- Hamburger menu (if needed)
- Centered logo
- Height: 56px

### 3.3 Footer Actions

**Sticky Bottom Bar:**
- Appears when content scrolls
- Contains navigation buttons (Back/Next)
- Shows summary info (item count, total price)
- Blur backdrop effect
- Safe area padding for mobile

---

## 4. Screen Specifications

### 4.1 Step 1: Item Selection

#### Layout
```
┌─────────────────────────────────────┐
│  Category Filter (Horizontal Scroll)│
│  [All] [👔 Clothes] [🛏️ Bedding]   │
│  [👟 Shoes] [✨ Delicate]           │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────┐  ┌─────────┐  ┌─────┐ │
│  │  Shirt  │  │  Pants  │  │...  │ │
│  │  👔     │  │  👖     │  │     │ │
│  │ $15/item│  │ $20/item│  │     │ │
│  │ [-] 3 [+]│ │ [-] 2 [+]│ │     │ │
│  │ [Add]   │  │ [Add]   │  │     │ │
│  └─────────┘  └─────────┘  └─────┘ │
│                                     │
│  ┌─────────┐  ┌─────────┐          │
│  │ Bedding │  │  Shoes  │          │
│  │ 🛏️      │  │  👟     │          │
│  │$25/kg   │  │ $50/item│          │
│  │ Weight: │  │ [-] 1 [+]│         │
│  │ ▓▓▓░░░░ │  │ [Add]   │          │
│  │ [Add]   │  └─────────┘          │
│  └─────────┘                       │
└─────────────────────────────────────┘
```

#### Features

**Category Filter:**
- Pill-shaped buttons
- Horizontal scroll on mobile
- Active state: Primary color fill
- Icons + labels
- "All" option to reset filter

**Item Cards:**
- Grid layout (1 col mobile, 2 tablet, 3 desktop)
- Card includes:
  - Item icon/image (top)
  - Name (bold)
  - Price with unit (e.g., "$15/item")
  - Quantity controls OR weight slider
  - Add button (disabled until valid selection)

**Quantity Controls:**
- Circular buttons: − and +
- Number display in center
- Min: 0, Max: 99
- Animation on change

**Weight Slider (for per_kg items):**
- Range slider with visual feedback
- Current weight displayed above
- Min: 0.5kg, Max: item-specific
- Step: 0.5kg
- Fill color indicates proportion

**Quick Add All:**
- Optional: "Add common items" preset
- Bundle deals (e.g., "5 shirts + 3 pants = 10% off")

**Empty State:**
- If no items in category: Illustration + message
- "Try another category" suggestion

### 4.2 Step 2: Pickup Time Selection

#### Layout
```
┌─────────────────────────────────────┐
│  Date Selector (Horizontal Cards)   │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐  │
│  │Today│ │Tomorrow│ │Wed│ │Thu│  │
│  │ 24  │ │  25   │ │ 26│ │ 27│  │
│  └─────┘ └─────┘ └─────┘ └─────┘  │
├─────────────────────────────────────┤
│                                     │
│  Available Time Slots               │
│                                     │
│  ┌──────────────┐ ┌──────────────┐ │
│  │ 08:00-10:00  │ │ 10:00-12:00  │ │
│  │ ✓ Available  │ │ ⚠ 3 left     │ │
│  │              │ │              │ │
│  └──────────────┘ └──────────────┘ │
│                                     │
│  ┌──────────────┐ ┌──────────────┐ │
│  │ 14:00-16:00  │ │ 16:00-18:00  │ │
│  │ ✗ Full       │ │ ✓ Available  │ │
│  │              │ │              │ │
│  └──────────────┘ └──────────────┘ │
│                                     │
│  ┌──────────────┐                  │
│  │ 18:00-20:00  │                  │
│  │ ✓ Available  │                  │
│  └──────────────┘                  │
└─────────────────────────────────────┘
```

#### Features

**Date Cards:**
- Vertical card layout
- Shows: Day name, date number
- Active state: Primary color border + bg
- Disabled: Past dates grayed out
- Scroll horizontally on mobile
- Today/tomorrow highlighted with labels

**Time Slot Cards:**
- Grid layout (2 cols mobile, 3 desktop)
- Each card shows:
  - Time range (bold)
  - Availability status
  - Visual indicator (color/icon)

**Availability Indicators:**
- ✓ Green: Plenty of slots (>10)
- ⚠ Yellow: Limited slots (<5)
- ✗ Red/Gray: Full (disabled)
- Exact count shown on hover/tap

**Selected State:**
- Thicker primary border
- Checkmark icon
- Slight background tint

**Info Tooltip:**
- "Why time slots?" explanation
- "Slots fill up quickly" urgency message

### 4.3 Step 3: Delivery Time Selection

**Same as Pickup with additions:**

**Smart Suggestions:**
- Based on pickup time + typical turnaround
- e.g., "Pickup: Mon 10am → Suggested: Wed 10am"
- Highlight recommended slot

**Turnaround Time Display:**
- "Standard: 48 hours"
- "Express: 24 hours (+$10)"
- Toggle between options

**Calendar View Option:**
- Toggle between list and calendar view
- Monthly overview
- Better for planning ahead

### 4.4 Step 4: Order Summary & Confirmation

#### Layout
```
┌─────────────────────────────────────┐
│  Order Summary                      │
├─────────────────────────────────────┤
│                                     │
│  📦 Items (5)                       │
│  ┌─────────────────────────────┐   │
│  │ Shirt × 3      $45.00       │   │
│  │ Pants × 2      $40.00       │   │
│  │ Bedding 2kg    $50.00       │   │
│  │                              │   │
│  │ Subtotal       $135.00      │   │
│  └─────────────────────────────┘   │
│                                     │
│  📍 Pickup                          │
│  ┌─────────────────────────────┐   │
│  │ Monday, Jan 24              │   │
│  │ 10:00 AM - 12:00 PM         │   │
│  │ [Change]                    │   │
│  └─────────────────────────────┘   │
│                                     │
│  🚚 Delivery                        │
│  ┌─────────────────────────────┐   │
│  │ Wednesday, Jan 26           │   │
│  │ 10:00 AM - 12:00 PM         │   │
│  │ [Change]                    │   │
│  └─────────────────────────────┘   │
│                                     │
│  💬 Special Instructions            │
│  ┌─────────────────────────────┐   │
│  │ [Textarea: Add notes...]    │   │
│  │                               │   │
│  └─────────────────────────────┘   │
│                                     │
│  ─────────────────────────────      │
│  Total              $135.00         │
│                                     │
│  ┌─────────────────────────────┐   │
│  │     CONFIRM BOOKING         │   │
│  └─────────────────────────────┘   │
│                                     │
│  ✓ Free pickup & delivery          │
│  ✓ Satisfaction guaranteed         │
│  ✓ Secure payment                  │
└─────────────────────────────────────┘
```

#### Features

**Expandable Sections:**
- Collapsible accordions for each section
- Edit buttons inline
- Visual icons for each section

**Price Breakdown:**
- Itemized list with quantities
- Per-item vs per-kg clearly shown
- Subtotal before any discounts
- Discount/promo code field
- Taxes if applicable
- **Total** prominently displayed

**Address Section (Future Enhancement):**
- Pickup address with map preview
- Delivery address
- "Use saved addresses" option
- Address autocomplete

**Special Instructions:**
- Textarea with character count
- Placeholder suggestions:
  - "Gate code: 1234"
  - "Leave with doorman"
  - "Extra delicate items"
  - "Allergy: Use fragrance-free detergent"

**Trust Signals:**
- Security badges
- Guarantee statements
- Customer rating
- Support contact

**Confirmation Button:**
- Large, prominent
- Loading state on click
- Validation: Disable if incomplete
- Microcopy: "No charge until pickup"

---

## 5. Interaction Patterns

### 5.1 Micro-interactions

#### Button Press
- Scale down to 0.98 on active
- Ripple effect on click
- Haptic feedback (mobile)

#### Card Selection
- Border color transition (200ms)
- Subtle scale up (1.02)
- Shadow increase
- Checkmark animate in

#### Quantity Change
- Number counter animation
- Button press animation
- Add to cart feedback

#### Step Transition
- Slide out old content
- Slide in new content
- Progress bar animate
- URL update (for bookmarking)

### 5.2 Gestures (Mobile)

- **Swipe left/right**: Navigate steps
- **Pull to refresh**: Reset booking
- **Long press**: Quick actions menu
- **Double tap**: Quick add item

### 5.3 Keyboard Navigation

- **Tab**: Move through interactive elements
- **Enter/Space**: Activate focused element
- **Arrow keys**: Navigate within groups
- **Esc**: Close modals/dropdowns
- **Number keys (1-9)**: Quick quantity input

### 5.4 Drag & Drop (Future)

- Reorder items in summary
- Drag items to remove
- Drag time slots to reschedule

---

## 6. Responsive Design

### 6.1 Breakpoints

```css
--bp-sm: 640px;   /* Mobile landscape */
--bp-md: 768px;   /* Tablet portrait */
--bp-lg: 1024px;  /* Tablet landscape */
--bp-xl: 1280px;  /* Desktop */
--bp-2xl: 1536px; /* Large desktop */
```

### 6.2 Mobile First Approach

**Mobile (< 640px):**
- Single column layouts
- Full-width cards
- Bottom sheet modals
- Simplified navigation
- Touch-friendly targets (min 44px)

**Tablet (640px - 1024px):**
- Two column grids
- Side-by-side forms
- Persistent stepper
- Split view options

**Desktop (> 1024px):**
- Three column grids
- Multi-column layouts
- Hover states enabled
- Keyboard shortcuts
- Sidebar navigation (optional)

### 6.3 Adaptive Components

**Item Grid:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Time Slots:**
- Mobile: 2 columns, scrollable
- Tablet: 3 columns
- Desktop: 4-5 columns

**Stepper:**
- Mobile: Compressed, icons only
- Tablet: Horizontal with labels
- Desktop: Full horizontal

---

## 7. Accessibility (A11y)

### 7.1 WCAG 2.1 AA Compliance

**Color Contrast:**
- Text: Minimum 4.5:1 ratio
- Large text: 3:1 ratio
- UI components: 3:1 ratio
- Test with tools (axe, Lighthouse)

**Keyboard Navigation:**
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Skip links for main content

**Screen Reader Support:**
- Semantic HTML structure
- ARIA labels where needed
- Live regions for dynamic content
- Alt text for images
- Form labels associated with inputs

### 7.2 Focus Management

```tsx
// Example: Trap focus in modal
useFocusTrap(modalRef, isOpen);

// Example: Return focus after action
const buttonRef = useRef();
buttonRef.current?.focus();
```

### 7.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 7.4 Error Handling

- Clear error messages
- Error prevention with validation
- Suggestions for correction
- Preserve user data
- Announce errors to screen readers

---

## 8. Performance Optimization

### 8.1 Loading States

**Skeleton Screens:**
- Shimmer effect
- Match content layout
- Perceived faster loading

**Progressive Loading:**
- Load critical content first
- Lazy load images
- Defer non-essential scripts

### 8.2 Caching Strategy

- Cache translations
- Cache service items
- Persist booking state (localStorage)
- Optimistic UI updates

### 8.3 Image Optimization

- WebP format with fallback
- Responsive images (srcset)
- Lazy loading
- SVG for icons

---

## 9. Dark Mode Support

### 9.1 Color Inversion Strategy

```css
.light {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border: #e5e7eb;
}

.dark {
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;
  --border: #374151;
}
```

### 9.2 Implementation

```tsx
// Hook for theme management
const { theme, toggleTheme } = useTheme();

// CSS variable switching
document.documentElement.classList.toggle('dark', isDark);
```

### 9.3 Considerations

- Maintain contrast ratios
- Avoid pure black (#000)
- Test in both modes
- Respect system preference
- User override option

---

## 10. Error States & Edge Cases

### 10.1 Network Errors

**Offline Detection:**
- Banner notification
- Queue actions for retry
- Local storage fallback

**API Failures:**
- User-friendly error messages
- Retry button
- Contact support option
- Log error for debugging

### 10.2 Validation Errors

**Inline Validation:**
- Real-time feedback
- Clear error messages
- Visual indicators (red border, icon)
- Don't wait for submit

**Form-level Validation:**
- Prevent invalid submissions
- Summarize errors at top
- Scroll to first error
- Keep focus context

### 10.3 Empty States

**No Items Selected:**
- Illustration
- "Start by selecting items" message
- Direct link to item selection

**No Available Slots:**
- Explain why
- Suggest alternative dates
- Notify when available (email signup)

### 10.4 Timeout Scenarios

**Session Timeout:**
- Warning before timeout
- Save progress automatically
- Restore on return
- Clear expiration message

---

## 11. Analytics & Tracking

### 11.1 Key Metrics

- Step completion rates
- Drop-off points
- Average booking time
- Most popular items
- Peak booking times

### 11.2 Events to Track

```javascript
// Example events
track('booking_started');
track('item_added', { itemId, quantity });
track('step_completed', { stepNumber });
track('booking_submitted', { totalValue });
track('booking_abandoned', { lastStep });
```

### 11.3 A/B Testing Opportunities

- Button colors/text
- Step order
- Default quantities
- Promo placement
- Image vs icon

---

## 12. Future Enhancements

### 12.1 Phase 2 Features

- User accounts & profiles
- Saved addresses
- Booking history
- Repeat orders
- Subscription plans
- Loyalty program
- Referral system

### 12.2 Advanced Features

- Real-time tracking
- Driver communication
- Photo confirmation
- AI-powered recommendations
- Voice interface
- AR room measurement (for bedding)

### 12.3 Integration Opportunities

- Calendar sync
- Smart home devices
- Payment wallets
- Delivery APIs
- CRM systems

---

## 13. Implementation Checklist

### Pre-Launch

- [ ] All components built & tested
- [ ] Responsive on all breakpoints
- [ ] Accessibility audit passed
- [ ] Performance budget met (< 3s load)
- [ ] Cross-browser testing
- [ ] Error handling implemented
- [ ] Analytics configured
- [ ] SEO optimized
- [ ] PWA capabilities (optional)

### Post-Launch

- [ ] Monitor error logs
- [ ] Track conversion funnel
- [ ] Gather user feedback
- [ ] Iterate based on data
- [ ] Plan next sprint

---

## Appendix A: File Structure Recommendation

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   └── ...
│   ├── layout/                # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Stepper.tsx
│   │   └── ...
│   ├── booking/               # Booking-specific components
│   │   ├── ItemSelector.tsx
│   │   ├── ItemCard.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── TimeSlotPicker.tsx
│   │   ├── DateSelector.tsx
│   │   ├── BookingSummary.tsx
│   │   └── ...
│   └── common/                # Shared components
│       ├── LanguageSwitcher.tsx
│       ├── LoadingSpinner.tsx
│       └── ...
├── hooks/                     # Custom hooks
│   ├── useBooking.ts
│   ├── useTranslation.ts
│   ├── useTheme.ts
│   └── ...
├── store/                     # State management
│   ├── bookingStore.ts
│   └── uiStore.ts
├── utils/                     # Utilities
│   ├── constants.ts
│   ├── formatters.ts
│   ├── validators.ts
│   └── ...
├── styles/                    # Global styles
│   ├── variables.css
│   ├── base.css
│   └── components.css
├── assets/                    # Static assets
│   ├── images/
│   ├── icons/
│   └── illustrations/
└── i18n/                      # Internationalization
    ├── locales/
    │   ├── en/
    │   ├── vi/
    │   └── ko/
    └── index.ts
```

---

## Appendix B: Design Tools & Resources

**Design:**
- Figma for UI design & prototyping
- Storybook for component documentation
- Zeroheight for design system docs

**Development:**
- TypeScript for type safety
- Tailwind CSS for styling
- Zustand for state management
- React Hook Form for forms
- React Query for data fetching

**Testing:**
- Jest + React Testing Library
- Cypress for E2E testing
- axe-core for accessibility
- Lighthouse for performance

**Deployment:**
- Vite for build tooling
- Netlify/Vercel for hosting
- Sentry for error tracking
- Google Analytics for metrics

---

*Document Version: 1.0*
*Last Updated: 2024*
*Author: UX/UI Design Team*
