(function () {
    $.ajax({
        type: 'GET',
        url: 'https://api.vvhan.com/api/weather',
        dataType: "json",
        data: {
            type: 'week'
        },
        success: function (res) {
            console.log(res)
			
          const arr = res.data
            console.log(arr)
            let city = res.city
            let wether = ''
            let min = []
            for (let i = 0; i < arr.length; i++) {
                var a = Number(arr[i].low.replace(/[^0-9]/ig, ''))
                min.push(a)
            }
            // console.log(Math.min.apply(null, min))
            let gh = Math.min.apply(null, min) //获取数组最小值
            for (let i = 0; i < min.length; i++) {
                if (min[i] === gh) {
                    console.log(i) //获取相同最小值的下标
                    wether = arr[i].type //获取最低温那天的天气
                }
            }
            let div = document.querySelector('.xf_bg_color')
            let h3 = document.createElement('h3')
            h3.classList.add('climate')
            let h4 = document.createElement('h4')
            h4.classList.add('xf_area')
            h3.innerHTML = gh + "℃"
            h4.innerHTML = city
            div.appendChild(h3)
            div.appendChild(h4)
        }
    })
})()