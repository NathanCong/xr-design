# xr-design

基于 Svelte 的 WEB 桌面端组件库

## 项目开发

```bash
pnpm serve
```

## 项目构建

### 1. 构建组件库（CommonJS）

```bash
pnpm build:cjs
```

### 2. 构建组件库（ES Module）

```bash
pnpm build:esm
```

### 3. 构建组件库（UMD）

```bash
pnpm build:umd
```

### 4. 构建组件库（CommonJS + ES Module + UMD）

```bash
pnpm build:dist
```

### 5. 构建预览页

```bash
pnpm build:site
```

## 代码检测

### 1. 代码检查（不修复）

```bash
pnpm check
```

### 2. 代码检查（带修复）

```bash
pnpm check:fix
```
