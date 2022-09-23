function isUpperCase(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
}

document.writeln(isUpperCase('tasks JavaScript', 6)); // true