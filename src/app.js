function greet(name){
    if (name == "" || name == undefined){
        return "Hello there!"
    }
    else{
        return `Hello, ${name}`
    }
}

export { greet }