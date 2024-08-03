import $ from "jquery"
import {ThemeContext} from "../context/ThemeContext"
import { useContext } from 'react'

const Something = (props) => {
    const theme = useContext(ThemeContext)
    const changeTheme = () => {
      theme.toggleMode()
    }
    $.fn.moveIt = function(){
        var $window = $(window);
        var instances = [];
        
        $(this).each(function(){
          instances.push(new moveItItem($(this)));
        });
        
        window.addEventListener('scroll', function(){
          var scrollTop = $window.scrollTop();
          instances.forEach(function(inst){
            inst.update(scrollTop);
          });
        }, {passive: true});
      }
      
      var moveItItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
      };
      
      moveItItem.prototype.update = function(scrollTop){
        this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
      };
      
      // Initialization
      $(function(){
        $('[data-scroll-speed]').moveIt();
      });
  
    return (
    <div className="content">
        <div className="wrapper">
          <div className="box" data-scroll-speed="2">S</div>
          <div className="box" data-scroll-speed="3">C</div>
          <div className="box" data-scroll-speed="6">R</div>
          <div className="box" data-scroll-speed="5">O</div>
          <div className="box" data-scroll-speed="9">L</div>
          <div className="box" data-scroll-speed="4">L</div>
        </div>
      </div>
    )
  }
  
  export default Something
  