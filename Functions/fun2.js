function a() {
    var b = 100
    C()
    function C() {
        console.log(b)
    }
}

a()