# MyNewJSExample
Record some front-end knowledge points

## add eslint step frist
   npm install -g eslint
   node green.js

## second step
    eslint green.js
    
# then new eslint configuration file .eslintrc.js

# see the configuration file .eslint.js for details

## a self-written configuration named selint-config-lei when learning ESLint
# execute the following command to install it:
  npm install -g eslint-config-lei
  
## if error ESLint couldn't find the plugin "eslint-plugin-promise, you can:
    npm i eslint-plugin-promise -g or npm i eslint-plugin-promise@latest --save-dev
    
## last try to use --fix parameter
    eslint green.js --fix
