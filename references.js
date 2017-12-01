function changeStuff(a, b, c)
{
    a = a * 10;
    b.item = "changed";
    c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);

/**
 *
 his produces the output:

 10
 changed
 unchanged

 If it was pure pass by value, then changing obj1.item would have no effect on the obj1 outside of the function.
 If it was pure pass by reference, then everything would have changed. num would be 100, and obj2.item would read "changed".

 Instead, the situation is that the item passed in is passed by value. But the item that is passed by value is itself a reference.
 Technically, this is called call-by-sharing.

 In practical terms, this means that if you change the parameter itself (as with num and obj2), that won't affect the
 item that was fed into the parameter. But if you change the INTERNALS of the parameter, that will propagate back up (as with obj1).
 **/