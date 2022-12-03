<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
console.log( Number("   123   ") ); //123
console.log( Number("123z") );      //NaN
console.log( Number(true) );        //1
console.log( Number(false) );       //0
    </script>
</body>
</html>