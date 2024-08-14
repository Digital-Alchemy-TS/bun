# 📨 Welcome to the Bun Compatibility Library

- [Extended docs](https://docs.digital-alchemy.app)
- [Discord](https://discord.gg/JkZ35Gv97Y)

This library provides some bun specific tooling and fixes for automation apps.

## 🥡 Import Code

Add as a dependency, and add to your imports. Nice and easy

```bash
npm i @digital-alchemy/bun
```

> **Add to code**

```typescript
import { LIB_BUN } from "@digital-alchemy/bun";

// application
const MY_APP = CreateApplication({
  libraries: [LIB_BUN],
  name: "home_automation",
})

// library
export const MY_LIBRARY = CreateLibrary({
  depends: [LIB_BUN],
  name: "special_logic",
})
```

## 🧲 Usage

This library has no publicly usable logic. Current features:

- `sqlite` shim for `synapse`
