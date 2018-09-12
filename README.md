## The code for the project is inside `src/redux-translator`
### run npm install && npm start for sample
### To add a language:
* add json file with key using language the string is typed with and value being the translation
* require the file in pathMappings with the appropriate key for the representation of the language
* use the updateLocale function when updating the locale
* wrap text with trans function (the trans function uses printf style variable handling)

