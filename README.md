# NDLA's Common ESLint config for H5P projects

This is the common ESLint configuration that all of NDLA's H5P projects should extend.
The config should align with [H5P Group's preferred configuration](https://github.com/h5p/h5p-boilerplate/blob/master/.eslintrc.json).
Rules that H5P Group's config does not mention are free to change within this project and otherwise per project.

## Usage

1. To install this configuration, install it with npm

   ```console
   npm install github:NDLANO/eslint-config-ndla-h5p --save-dev
   ```

1. Extend the configuration like this:

   ```json
   {
     "extends": ["eslint-config-ndla-h5p"]
   }
   ```
