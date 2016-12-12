var newObj = Object.create(null, {
            size: {
                value: "large",
                enumerable: true
            },
            shape: {
                value: "round",
                enumerable: true
            }
        });

document.write(newObj.size + "<br/>");
document.write(newObj.shape + "<br/>");
document.write(Object.getPrototypeOf(newObj));