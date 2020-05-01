# Resty (Postman clone) Lab


## Components (Presentation)
[X] - Form (url input, method radio, json text, submit, header stretch )
[X] - Display (response)
[] - List (map)
[] - Header (top of page)

## Containers
[X] - FormControl (handleSubmit, handleChange)

## Hooks
[] - useGet
[] - usePost
[] - usePut
[] - usePatch
[] - useDelete

## Services
[X] - api (fetch(url, object with headers, body))

### Order
——— 
- FORM COMPONENT
- REQUEST CONTAINER (Pass handle submit and change functions)
- console log url method and body
- FETCH SERVICE
- console log response
- DISPLAY COMPONENT
- include headers in display

- LIST COMPONENT
- append request to list
- add headers/auth to FORM
- HEADER COMPONENT