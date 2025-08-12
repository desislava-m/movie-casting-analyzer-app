# Movie Casting Analyzer Web App

At the start view the application allows the user to upload three csv files with roles, movies and actors data.
handleFileUpload func takes the uploaded file, reads it as text and passes it as a parameter to parseCsv function.
parseCsv takes the csv file, extracts the first row (the headers) and turns them to lower case. With a forEach loop parses every csv file into an array of objects where the object key is a column from the headers and the value is the corresponding column data from every row.

handleFileUpload function takes the result object from parseCsv { headers, data: result } and checks if the file headers include the words "birthdate", "title" or "rolename" in order to decide in which state (useState hook) to save the array of objects. An additional useEffect hook checks whether any of the states roles, actors or movies is empty and prompts the user to upload the
needed files if any. After all the files have been uploaded the user lands on the home page.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
