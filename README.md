# denv
A module similar to [dotEnv](https://github.com/motdotla/dotenv), but for Deno

## Usage
You can directly import it, and it will use the `.env` file of the directory it is imported from:
```ts
import "<denv link>";
```
else you can import the `load` function, where you can pass the path to the `.env` file:
```ts
import {load} from "<denv link>";
await load("myenvfile");
```
