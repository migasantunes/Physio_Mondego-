---
name: shadcn-ui
description: shadcn/ui component library — installation, CLI, theming, component patterns, form composition, icons, and customization rules.
---
# shadcn/ui — Skill Reference

Comprehensive reference for building with shadcn/ui. Not an npm library — it's a **code distribution platform**. Components are copied into your project, giving you full ownership and customization. Built on Radix UI primitives and Tailwind CSS.

---

## 1. Installation & Setup

### Quick Start (New Project)

```bash
# Next.js
pnpm dlx shadcn@latest init -t next

# Vite
pnpm dlx shadcn@latest init -t vite

# Monorepo
pnpm dlx shadcn@latest init -t next --monorepo

# With a named preset
npx shadcn@latest init --preset base-nova
npx shadcn@latest init --defaults  # shortcut: --template=next --preset=base-nova

# With a preset code from ui.shadcn.com
npx shadcn@latest init --preset a2r6bw --template vite
```

### Add Components

```bash
npx shadcn@latest add button card dialog
npx shadcn@latest add --all              # add everything
npx shadcn@latest add @magicui/shimmer-button  # community registry
```

### Import Convention

```tsx
import { Button } from "@/components/ui/button"
```

Components go to `@/components/ui/` by default (configurable via `components.json`).

### Supported Frameworks
Next.js, Vite, TanStack Start, Laravel, React Router, Astro, Manual

---

## 2. `components.json` Configuration

```json
{
  "style": "nova",
  "rsc": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

**Key fields from `npx shadcn@latest info`:**
- **`aliases`** → use actual alias prefix for imports, never hardcode
- **`isRSC`** → when `true`, components with `useState`/`useEffect`/handlers need `"use client"`
- **`tailwindVersion`** → `"v4"` uses `@theme inline`; `"v3"` uses `tailwind.config.js`
- **`tailwindCssFile`** → the global CSS file for custom variables. Always edit this file, never create new ones
- **`style`** → visual treatment (e.g. `nova`, `vega`)
- **`base`** → primitive library (`radix` or `base`)
- **`iconLibrary`** → determines icon imports (`lucide-react`, `@tabler/icons-react`, etc.)

---

## 3. Theming

### CSS Variables Convention

All colors follow `name` / `name-foreground` pattern. OKLCH format: `oklch(lightness chroma hue)`.

| Variable | Purpose |
|----------|---------|
| `--background` / `--foreground` | Page background and default text |
| `--card` / `--card-foreground` | Card surfaces |
| `--primary` / `--primary-foreground` | Primary buttons and actions |
| `--secondary` / `--secondary-foreground` | Secondary actions |
| `--muted` / `--muted-foreground` | Muted/disabled states |
| `--accent` / `--accent-foreground` | Hover and accent states |
| `--destructive` / `--destructive-foreground` | Error and destructive actions |
| `--border` | Default border color |
| `--input` | Form input borders |
| `--ring` | Focus ring color |
| `--chart-1` through `--chart-5` | Chart visualization |
| `--sidebar-*` | Sidebar-specific colors |
| `--radius` | Global border radius |

### Usage

```tsx
<div className="bg-primary text-primary-foreground">Hello</div>
<div className="bg-muted text-muted-foreground">Subtle text</div>
```

### Dark Mode (next-themes)

```tsx
import { ThemeProvider } from "next-themes"

<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

### Adding Custom Colors (Tailwind v4)

```css
/* In globals.css */
:root {
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.28 0.07 46);
}
.dark {
  --warning: oklch(0.41 0.11 46);
  --warning-foreground: oklch(0.99 0.02 95);
}

@theme inline {
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}
```

### Base Colors
Available: Neutral, Stone, Zinc, Mauve, Olive, Mist, Taupe

---

## 4. Component Catalog (60+)

| Category | Components |
|----------|-----------|
| **Actions** | `Button`, `ButtonGroup` |
| **Form Inputs** | `Input`, `InputGroup`, `InputOTP`, `Textarea`, `Select`, `NativeSelect`, `Combobox`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `DatePicker`, `Calendar` |
| **Form Layout** | `Field`, `FieldGroup`, `FieldSet`, `FieldLegend`, `Label` |
| **Data Display** | `Table`, `DataTable`, `Card`, `Badge`, `Avatar`, `Kbd`, `Typography` |
| **Navigation** | `Sidebar`, `NavigationMenu`, `Breadcrumb`, `Tabs`, `Pagination` |
| **Overlays** | `Dialog`, `AlertDialog`, `Sheet`, `Drawer`, `Popover`, `HoverCard`, `Tooltip` |
| **Feedback** | `Alert`, `Sonner` (toast), `Progress`, `Skeleton`, `Spinner`, `Empty` |
| **Layout** | `Card`, `Separator`, `Resizable`, `ScrollArea`, `Accordion`, `Collapsible`, `AspectRatio` |
| **Menus** | `DropdownMenu`, `ContextMenu`, `Menubar`, `Command` |
| **Toggle** | `Toggle`, `ToggleGroup` |
| **Misc** | `Carousel`, `Chart`, `Direction`, `Item` |

### Component Selection Guide

| Need | Use |
|------|-----|
| Button/action | `Button` with appropriate variant |
| Form inputs | `Input`, `Select`, `Combobox`, `Switch`, `Checkbox`, `RadioGroup`, `Textarea`, `InputOTP`, `Slider` |
| Toggle 2–5 options | `ToggleGroup` + `ToggleGroupItem` |
| Data display | `Table`, `Card`, `Badge`, `Avatar` |
| Navigation | `Sidebar`, `NavigationMenu`, `Breadcrumb`, `Tabs`, `Pagination` |
| Modal overlay | `Dialog` (focused task), `AlertDialog` (confirmation) |
| Side panel | `Sheet` |
| Bottom sheet (mobile) | `Drawer` |
| Command palette | `Command` inside `Dialog` |
| Charts | `Chart` (wraps Recharts) |
| Empty states | `Empty` |
| Toasts | `sonner` — `toast.success()`, `toast.error()` |
| Loading | `Skeleton`, `Spinner` |

---

## 5. Critical Rules

### Forms — Always use FieldGroup + Field

```tsx
// ✅ CORRECT
<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" />
  </Field>
</FieldGroup>

// ❌ WRONG: raw div with space-y-*
<div className="space-y-4">
  <Label>Email</Label>
  <Input />
</div>
```

### Form Validation

```tsx
<Field data-invalid>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" aria-invalid />
  <FieldDescription>Invalid email address.</FieldDescription>
</Field>
```

### Icons — Use `data-icon`, no sizing classes

```tsx
// ✅ CORRECT
<Button>
  <SearchIcon data-icon="inline-start" />
  Search
</Button>

// ❌ WRONG: manual sizing
<Button>
  <SearchIcon className="mr-2 size-4" />
  Search
</Button>
```

**Never assume `lucide-react`** — check the project's `iconLibrary` field.

### Spacing — `gap-*` not `space-y-*`

```tsx
// ✅ CORRECT
<div className="flex flex-col gap-4">

// ❌ WRONG
<div className="flex flex-col space-y-4">
```

### Dimensions — `size-*` not `w-* h-*`

```tsx
// ✅ size-10
// ❌ w-10 h-10
```

### Items Always Inside Their Group

```tsx
// ✅ CORRECT
<SelectContent>
  <SelectGroup>
    <SelectItem value="a">A</SelectItem>
  </SelectGroup>
</SelectContent>

// ❌ WRONG: items directly in content
<SelectContent>
  <SelectItem value="a">A</SelectItem>
</SelectContent>
```

This applies to: `SelectGroup`, `DropdownMenuGroup`, `MenubarGroup`, `ContextMenuGroup`, `CommandGroup`.

### Dialog/Sheet/Drawer — Always need a Title

```tsx
<DialogContent>
  <DialogHeader>
    <DialogTitle>Edit Profile</DialogTitle>
    <DialogDescription>Update your info.</DialogDescription>
  </DialogHeader>
</DialogContent>
```

Use `className="sr-only"` on title if visually hidden.

### Card Structure — Full composition

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Button Loading — No `isPending` prop

```tsx
<Button disabled>
  <Spinner data-icon="inline-start" />
  Saving...
</Button>
```

### Avatar — Always needs AvatarFallback

```tsx
<Avatar>
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Use Existing Components

| Instead of | Use |
|---|---|
| `<hr>` or `<div className="border-t">` | `<Separator />` |
| `<div className="animate-pulse">` | `<Skeleton className="h-4 w-3/4" />` |
| `<span className="rounded-full bg-green-100">` | `<Badge variant="secondary">` |

### Toast — Use `sonner`

```tsx
import { toast } from "sonner"

toast.success("Changes saved.")
toast.error("Something went wrong.")
toast("Deleted.", { action: { label: "Undo", onClick: undoDelete } })
```

---

## 6. Customizing Components

**In order of preference:**

1. **Built-in variants:** `<Button variant="outline" size="sm">`
2. **Tailwind classes via `className`:** `<Card className="max-w-md mx-auto">`
3. **Add a new variant** — edit the component source, add to `cva`:
   ```tsx
   // components/ui/button.tsx
   warning: "bg-warning text-warning-foreground hover:bg-warning/90",
   ```
4. **Wrapper components** — compose primitives into higher-level patterns:
   ```tsx
   export function ConfirmDialog({ title, onConfirm, children }) {
     return (
       <AlertDialog>
         <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
         <AlertDialogContent>
           <AlertDialogHeader>
             <AlertDialogTitle>{title}</AlertDialogTitle>
           </AlertDialogHeader>
           <AlertDialogFooter>
             <AlertDialogCancel>Cancel</AlertDialogCancel>
             <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
           </AlertDialogFooter>
         </AlertDialogContent>
       </AlertDialog>
     )
   }
   ```

---

## 7. CLI Reference

```bash
# Project info
npx shadcn@latest info                    # get project context

# Add components
npx shadcn@latest add button card dialog
npx shadcn@latest add --all
npx shadcn@latest add @magicui/shimmer-button  # community

# Preview changes
npx shadcn@latest add button --dry-run
npx shadcn@latest add button --diff button.tsx

# Search registries
npx shadcn@latest search @shadcn -q "sidebar"
npx shadcn@latest search @tailark -q "stats"

# Get docs & examples
npx shadcn@latest docs button dialog select

# View registry items
npx shadcn@latest view @shadcn/button

# Presets
npx shadcn@latest init --preset base-nova --force
npx shadcn@latest init --preset a2r6bw --force
```

**Named presets:** `base-nova`, `radix-nova`
**Templates:** `next`, `vite`, `start`, `react-router`, `astro`, `laravel`

---

## 8. Workflow

1. **Get project context** — `npx shadcn@latest info`
2. **Check installed components** — list the `resolvedPaths.ui` directory before adding
3. **Find components** — `npx shadcn@latest search`
4. **Get docs & examples** — `npx shadcn@latest docs <component>`, then fetch URLs
5. **Install** — `npx shadcn@latest add <component>`
6. **Fix imports** — for community registries, rewrite hardcoded `@/components/ui/...` to match project aliases
7. **Review** — always read added files, verify correctness, fix icon imports to match `iconLibrary`
8. **Registry must be explicit** — never guess which registry, ask user if unspecified

---

## 9. Updating Components (Smart Merge)

**NEVER fetch raw files from GitHub — always use the CLI.**

```bash
npx shadcn@latest add button --dry-run         # see affected files
npx shadcn@latest add button --diff button.tsx  # see upstream vs local diff
```

- No local changes → safe to overwrite
- Has local changes → manually merge upstream updates preserving local mods
- Never use `--overwrite` without user approval

---

## 10. Switching Presets

Always ask the user: **reinstall**, **merge**, or **skip**?

- **Reinstall:** `npx shadcn@latest init --preset <code> --force --reinstall`
- **Merge:** `npx shadcn@latest init --preset <code> --force --no-reinstall`, then smart-merge each component
- **Skip:** `npx shadcn@latest init --preset <code> --force --no-reinstall` (only updates config/CSS)

---

## 11. MCP Server (Optional)

```bash
shadcn mcp        # start the MCP server
shadcn mcp init   # write config for your editor
```

Tools: `get_project_registries`, `list_items_in_registries`, `search_items_in_registries`, `view_items_in_registries`, `get_item_examples_from_registries`, `get_add_command_for_items`, `get_audit_checklist`

---

## Key Principles

1. **Code ownership** — components live in YOUR project, not `node_modules`
2. **Use semantic tokens** — `bg-primary`, `text-muted-foreground`, never raw colors
3. **OKLCH colors** — all CSS variables use `oklch(lightness chroma hue)` format
4. **CLI first** — always use `npx shadcn@latest` for adding/updating, never copy from GitHub
5. **`cn()` for merging classes** — `cn("px-4", className)` from `@/lib/utils`
6. **Accessibility built-in** — Radix primitives handle ARIA; always include Title in overlays, Fallback in Avatar
7. **`"use client"` when needed** — check `isRSC` field; add directive for interactive components

License: MIT
