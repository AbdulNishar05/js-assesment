$(document).ready(function () {
    var count = 1;
    var rows = [1];
    var displayTable = false;
    var table = $('#table1');
    var tableBody = $("#table-body")
    var tableBody = $('#table-body');
    if (displayTable) {
        table.css('display', 'block');
    } else {
        table.css('display', 'none');
    }

    $("#add").click(function () {
        count = count + 1;
        rows.push(count);
        var head = $('#table-head');
        var div = "<div id='order-row-" + count + "' class='row'>";
        var row = $('#fields').html();
        row = row.replace(/1/g, count);
        row = row + '<button type="button" class="del-btn" value="' + count + '">x</button>';
        div = div + row;
        div = div + '</div>'
        head.append(div);
    })

    $(document).on('click', '.del-btn', function (event) {
        let id = $(event.currentTarget).val();
        var removeDivID = "#order-row-" + id;
        $(removeDivID).remove();
    });

    $('#clear').click(function () {
        for (let i = 0; i < rows.length; i++) {
            $("#order-row-" + rows[i]).remove();
        }
        rows = [1];
        table.css('display', 'none');
        tableBody.html('');
        $('#char-id1').val('');
        $('#large-id1').val('');
        $('#fib-id1').val('');
        $("#dup-id1").val('');
    })

    $("#char-id1").keypress(function (event) {
        var keyCode = event.which;
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32) {
            return false;
        }
        return true;
    });

    $("#submit").click(function () {
        if ($(".row").length < 5) {
            alert("add rows");
            return false
        }

        var words = [];
        var large = [];
        var fib = [];
        var dup = [];
        for (let i = 1, j = 0; i <= rows.length; i++, j++) {
            words[j] = $('#char-id' + i).val();
            large[j] = $('#large-id' + i).val();
            fib[j] = $('#fib-id' + i).val();
            dup[j] = $("#dup-id" + i).val();
            if (words[j] == "" || large[j] == "" || fib[j] == "" || dup[j] == "") {
                alert("fill the box")
                return false
            }
        }
            function largest(large) {
                let first = -1, second = -1;
                for (let i = 0; i < large.length; i++) {
                    if (large[i] > first) {
                        second = first;
                        first = large[i];
                    }
                    else if (large[i] > second && large[i] != first) {
                        second = large[i];
                    }
                }
                $("#large").text(second);
                console.log(second);
                return;
            }
            largest(large)

            function duplicate(dup) {
                var result = [];
                for (var i = 0; i < dup.length - 1; i++) {
                    for (var j = i + 1; j < dup.length; j++) {
                        if (dup[i] == dup[j]) {
                            result.push(dup[i]);
                        }
                    }
                }
                $("#dup").text(result);
                console.log(result);
                return;
            }

            duplicate(dup)

            function Repeated() {
                for (let i = 0; i < words.length; i++) {
                    let data = words[i];
                    for (let j = 0; j < words.length; j++) {
                        if (i == j) { continue; }
                        if (data == words[j]) {
                            $("#words").text(data);
                            return;
                        }
                    }
                }
            }
            Repeated(words);

            function fibanocci(fib) {
                var num1, num2, res, temp = "";
                for (let i = 0; i < fib.length; i++) {
                    num1 = 0;
                    num2 = 1;
                    res = 0;
                    res = num1 + num2;
                    for (let j = 1; j <= fib[i]; j++) {
                        if (res == fib[i]) {
                            break;
                        }
                        num1 = num2;
                        num2 = res;
                        res = num1 + num2;
                    }
                    if (res == fib[i]) {
                        temp = temp + "  " + res;
                    }
                }
                $("#fib").text(temp);
                console.log(temp);
                return;
            }
            fibanocci(fib);
        
        table.css('display', 'block')
    })

})
