$(window).load(function(){
    
    ;(function(_modals, $) {
        // Class constructor
        var Class = function() {
            return function(params) {
                if ( !(this instanceof arguments.callee) ) {
                    return new arguments.callee(arguments);
                }
                this.initialize.apply(this,(params.callee ? params : arguments));
            };
        };
        
        var ProclaimModal = Class();
        ProclaimModal.prototype = {
            initialize: function(_modal) {
                this.modal = $(_modal);
                this.should_reset = false;
                this.modal.wrap('<div class="modal-background" />');
                this.modal_bg = this.modal.parent('.modal-background');
                
                this.setupListeners();
            },
            setupListeners: function() {
                var self = this;
                this.modal_bg.click(function(e) { 
                    if(e.target != this){ return true; } // Prevents children from firing event without using stopPropagation.
                    self.conceal(); 
                });
                // Listens for end of CSS animations.
                this.modal.on("webkitAnimationEnd oAnimationEnd oanimationend animationend msTransitionEnd", function() {
                    self.toggleModalClasses();
                });
            },
            proclaim: function() {
                this.modal_bg.show(); // CSS animation begins.
            },
            conceal: function() {
                this.should_reset = true;
                this.modal_bg.addClass('fadeOut'); // CSS animation begins.
            },
            toggleModalClasses: function() {
                if (this.should_reset) {
                    this.modal_bg.hide().removeClass('fadeOut');
                    this.should_reset = false;
                }
            }
        }
        
        _modals.each(function(ix, o){
            $(o).data('proclaim.instance', new ProclaimModal(o));
        });
        
        $.fn.proclaim = function() {
            this.each(function() {
                $(this).data('proclaim.instance').proclaim();
            });
        }
        
        $.fn.conceal = function() {
            this.each(function() {
                $(this).data('proclaim.instance').conceal();
            });
        }
        
        return _modals;
        
    })($('.proclaim-modal'), jQuery);
});