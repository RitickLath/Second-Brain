## SETTING UP TYPESCRIPT PROJECT WITH EXPRESS

### **1. INITIALIZE A NODE.JS PROJECT**

Run the following command to create a `package.json` file:

```bash
npm init -y
```

The `-y` flag automatically generates a `package.json` file with default values.

### **2. INSTALL TYPESCRIPT AS A DEVELOPMENT DEPENDENCY**

Install TypeScript locally as a dev dependency for the project:

```bash
npm install -D typescript
```

### **3. INITIALIZE TYPESCRIPT CONFIGURATION**

Generate a `tsconfig.json` file for configuring TypeScript settings:

```bash
npx tsc --init
```

### **4. UPDATE `tsconfig.json`**

Add or update the following configuration options in the `tsconfig.json` file:

```json
"rootDir": "./src",
"outDir": "./dist",
```

- **`rootDir`**: Specifies the folder where your TypeScript source files will reside.
- **`outDir`**: Defines the output folder for compiled JavaScript files.

### **5. INSTALL DEPENDENCIES**

1. Install Express

```bash
npm install express
```

We will face the following issue:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/74606d15-53c6-40b5-8f1b-b4970f4e355f/871ca227-2892-4d61-b4f0-c5d8cdc699ff/image.png)

1. Install TypeScript Types for Express

```bash
npm install -D @types/express
```

1. Install JSON Web Token (jsonwebtoken)

```bash
npm install jsonwebtoken
```

1. Install Mongoose

```bash
npm install mongoose
```

1. Install TypeScript Types for Mongoose

```bash
npm install -D @types/mongoose
```

### INSTALL DEVELOPMENT TOOLS

1. Install `nodemon`

Nodemon automatically restarts the server when changes are detected:

```bash
npm install -D nodemon
```

1. Install `concurrently`

Concurrently allows you to run multiple scripts simultaneously:

```bash
npm install -D concurrently
```

### **DIRECTORY STRUCTURE**

Ensure your project follows this structure:

```
project-folder/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json

```

- **`src/`**: Contains your TypeScript source files.
- **`dist/`**: Contains the compiled JavaScript files.

### **UPDATE PACKAGE.JSON FILE**

Add the following scripts to your `package.json` file:

```json
"scripts": {
  "build": "tsc -b",
  "start": "node dist/index.js",
  "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
}
```

**EXPLANATION OF SCRIPT**

- **`build`**: Compiles TypeScript files to JavaScript.
- **`start`**: Starts the compiled JavaScript server using Node.js.
- **`dev`**: Uses `concurrently` to:
    1. **Watch and compile TypeScript files** (`tsc -w`).
    2. **Restart the server** when changes are detected (`nodemon dist/index.js`).

### **RUNNING THE PROJECT**

- **To Compile TypeScript**:
    
    ```bash
    npm run build
    ```
    
- **To Start the Server**:
    
    ```bash
    npm run start
    ```
    
- **To Run in Development Mode**:
    
    ```bash
    npm run dev
    ```
    

### STARTER CODE

- Create the entry point file:`src/index.ts`:
    
    ```tsx
    import express from "express";
    
    const app = express();
    const PORT = process.env.PORT || 3000;
    
    app.get("/", (req, res) => {
      res.send("Hello, TypeScript with Express!");
    });
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
    ```