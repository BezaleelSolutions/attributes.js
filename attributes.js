 ////////////////////
    
      $(document).on('input','.onlytext', function(e) {
          old=$(this).data("old");
          this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z]{1,15}\s*)((\s+)([A-Za-z]{1,15})(\s+)*)*$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
    
      $(document).on('input','.textnumbersonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[a-zA-Z0-9\-]+$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     $(document).on('input','.phonenumber', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9\s\+\(\)]+$/.test($(this).val())) { 
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
       $(document).on('input','.textnumberspaceonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9]{1,15}\s*)((\s+)([A-Za-z0-9]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
          $(document).on('input','.textnumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,]{1,20}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,]{1,20})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
          $(document).on('input','.textnumberemojii', function(e) {
         old=$(this).data("old");
         //this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
         $(document).on('input','.onlynumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9]+$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });

    
        $(document).on('input','.decimal', function(e) {
      
         old=$(this).data("old");
         
         if (!/^\d{1,10}(\.\d{0,2})?$/.test($(this).val())) {

           if($(this).val() !=="")
          {

            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
      function max_value(ob,max_value) {
             
              if(ob.value > parseInt(max_value))
              {
                
                ob.value=max_value;
                
              }
            }


 ////////////////////
    
      $(document).on('input','.onlytext', function(e) {
          old=$(this).data("old");
          this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z]{1,15}\s*)((\s+)([A-Za-z]{1,15})(\s+)*)*$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
    
      $(document).on('input','.textnumbersonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[a-zA-Z0-9\-]+$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     $(document).on('input','.phonenumber', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9\s\+\(\)]+$/.test($(this).val())) { 
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
       $(document).on('input','.textnumberspaceonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9]{1,15}\s*)((\s+)([A-Za-z0-9]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
          $(document).on('input','.textnumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,]{1,20}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,]{1,20})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
          $(document).on('input','.textnumberemojii', function(e) {
         old=$(this).data("old");
         //this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
         $(document).on('input','.onlynumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9]+$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });

    
        $(document).on('input','.decimal', function(e) {
      
         old=$(this).data("old");
         
         if (!/^\d{1,10}(\.\d{0,2})?$/.test($(this).val())) {

           if($(this).val() !=="")
          {

            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
      function max_value(ob,max_value) {
             
              if(ob.value > parseInt(max_value))
              {
                
                ob.value=max_value;
                
              }
            }


 ////////////////////
    
      $(document).on('input','.onlytext', function(e) {
          old=$(this).data("old");
          this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z]{1,15}\s*)((\s+)([A-Za-z]{1,15})(\s+)*)*$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
    
      $(document).on('input','.textnumbersonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[a-zA-Z0-9\-]+$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     $(document).on('input','.phonenumber', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9\s\+\(\)]+$/.test($(this).val())) { 
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
       $(document).on('input','.textnumberspaceonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9]{1,15}\s*)((\s+)([A-Za-z0-9]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
          $(document).on('input','.textnumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,]{1,20}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,]{1,20})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
          $(document).on('input','.textnumberemojii', function(e) {
         old=$(this).data("old");
         //this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
         $(document).on('input','.onlynumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9]+$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });

    
        $(document).on('input','.decimal', function(e) {
      
         old=$(this).data("old");
         
         if (!/^\d{1,10}(\.\d{0,2})?$/.test($(this).val())) {

           if($(this).val() !=="")
          {

            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
      function max_value(ob,max_value) {
             
              if(ob.value > parseInt(max_value))
              {
                
                ob.value=max_value;
                
              }
            }


 ////////////////////
    
      $(document).on('input','.onlytext', function(e) {
          old=$(this).data("old");
          this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z]{1,15}\s*)((\s+)([A-Za-z]{1,15})(\s+)*)*$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
    
      $(document).on('input','.textnumbersonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[a-zA-Z0-9\-]+$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     $(document).on('input','.phonenumber', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9\s\+\(\)]+$/.test($(this).val())) { 
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
       $(document).on('input','.textnumberspaceonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9]{1,15}\s*)((\s+)([A-Za-z0-9]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
          $(document).on('input','.textnumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,]{1,20}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,]{1,20})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
          $(document).on('input','.textnumberemojii', function(e) {
         old=$(this).data("old");
         //this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
         $(document).on('input','.onlynumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9]+$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });

    
        $(document).on('input','.decimal', function(e) {
      
         old=$(this).data("old");
         
         if (!/^\d{1,10}(\.\d{0,2})?$/.test($(this).val())) {

           if($(this).val() !=="")
          {

            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
      function max_value(ob,max_value) {
             
              if(ob.value > parseInt(max_value))
              {
                
                ob.value=max_value;
                
              }
            }
