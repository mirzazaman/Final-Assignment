let r = 3;
console.log("Radius is", r + "cm");

circleInfo(r);

function circleInfo(r) {
    let d = r + r ;
    console.log("Diameter =", d + "cm");

    let c = 3.14 * d;
    console.log("Circumference =", c + "cm");

    let a = 3.14 * (r * r);
    console.log("Area =", a + "cm");
}