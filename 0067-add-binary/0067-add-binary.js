  function toBase10(n) {
            return BigInt(`0b${n}`);
        }

        function toBinary(n) {
            return n.toString(2);
        }

        var addBinary = function (a, b) {
            let a1 = toBase10(a);
            let b1 = toBase10(b);
            let sum = a1 + b1;

            return toBinary(sum);
        };