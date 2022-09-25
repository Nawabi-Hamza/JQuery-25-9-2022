var date = new Date()
// var dd = date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate()
$('#date').text(date)



        // $('.myDiv').on({
        //     click:function(){
        //         $(this).animate(
        //             {
        //             left:'300px',
        //             height:'50px',
        //             width:'200px',
        //             opacity:'0.5'
        //             },
        //         3000,()=>{
        //             alert("I rech here")
        //         })
        //     }
        // })

    // $('.myDiv').click(()=>{
    //     var myDiv = $('.myDiv')
    //     myDiv.animate({height:'200px',},"slow");
    //     myDiv.animate({width:'500px',},"slow");
    //     myDiv.animate({width:'100px',top:'100px'},"slow");
    //     myDiv.animate({height:'100px',left:'200px'},"slow");
        
    // })
        // $('#ne').click(()=>{
        //     $('.myDiv').stop()
        //     // alert('stoop')
        // })
        // $('h1').click(()=>{
        //     $('p').slideToggle(3000)
        // })
        // $('#ne').click(()=>{
        //     $('p').stop()
        //     // alert('stoop')
        // })
            
            // $('.myDiv').on({
            //     click:function(){
            //         $(this).animate(
            //             {
            //             left:'300px',
            //             height:'50px',
            //             width:'200px',
            //             opacity:'0.5'
            //             },3000,function(){
            //                 alert('finished')
            //             })
                        
            //     }
            // })
    // $('p').on({
    //     click:function(){
    //                 $(this).hide(function(){
    //                     alert('pragraph is hide')
    //                 })    
    //                     }
    //             })

        // $('h1').click(function(){
        //     $('p').css('color' , 'white').css('background-color','red')
        //     .slideUp('fast').slideDown(1000).animate(
        //         {
        //             width:'200px'
        //         },2000)
        // })

// $('h1').click(function(){
//     //    alert("this is text methode --->" + $('p').text())
//     //    alert("this is text methode --->" + $('p').html())
//     //    alert("this is text methode --->" + $('input').val())
//     $('h1').text($('h1').text()+ $('p').text()) 
//     //or
//     // var he =document.getElementById('head')
//     // he.innerHTML=$('h1').text() + $('p').text();
//     })

    // $('h1').click(()=>{
    //     alert("the attribute si: "+ $('p').attr('style'))
    // })

        // $('h1').click(()=>{
        //     // $('input').html('<h5>This massege is</br> passed from</h5>')
        //     $('input').val('This massege is passed from')
        //     // $('h1').text('This massege is passed from')
        //     // document.querySelector('h1').innerHTML='This massege is passed from '
        //         // alert("the attribute si: "+ $('p').attr('style'))
        //     })

    // $('h1').click(()=>{

    // console.log( $('a').attr({
    //     'href':'https://yahoo.com',
    //     'title':'search by yahooooo ',
    //     'style':'color:red;'
        
    // }))

    //     })
        // sum the texts
            // var par = $('p').text()
            // $('h1').click(()=>{
            //     $('h1').append(par)

            // })

            // var par = $('p').text()
            // $('h1').click(()=>{
            //     // $('h1').append(par)
            //     // $('h1').prepend(par)
            //     // $('h1').after(par)
            //     // $('h1').before(par) 

            // })
            //     var i = 1
            // $('ul').click(()=>{
                

            //     $('li').append('<li>'+ i++ +'</li>')
                
            // })

            $('h1').click(()=>{
                $('h1').before($('p') , $('strong'), $('small'),$('mark'))
            })