function Cylinder (r,h) {
    this.radius = r ;
    this.height = h ;
    this.pi = 3.14
    this.result = function(){
        console.log("Radius", r);
        console.log("Height", h);
        r = r * r;
        let ans = 3.14*r*h;
        return ans;
    }
}


let test = new Cylinder(4,12);

console.log("Volume",test.result());