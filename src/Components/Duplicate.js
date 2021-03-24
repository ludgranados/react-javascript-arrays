let chars = [1, 4, 9, 4, 100, 4, 30, 1];

let DuplicateComponent = [];
chars.forEach((c) => {
    if (!DuplicateComponent.includes(c)) {
        DuplicateComponent.push(c);
    }
});

console.log(DuplicateComponent);

export default DuplicateComponent;  