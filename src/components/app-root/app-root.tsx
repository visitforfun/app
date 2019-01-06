import '@stencil/router';
import '@mu-lib/mu-svg-screen';
import { Component } from '@stencil/core';

// Included as a workaround for stencil-route(r) bug that won't bundldle deps
<mu-svg-screen width={0} height={0} src=''></mu-svg-screen>

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='mu-svg-screen' exact={true} componentProps={{
              src: '../../assets/home.png',
              width: 712,
              height: 2883,
              links: [
                <a href="#menu"><rect height="88.88889" id="menu" width="122.222222" x="571.555639" y="13.33332"/></a>,
                <a href="#map"><rect height="1027.999971" id="map" width="678.333289" x="14.33342" y="111.44443"/></a>,
                <a href="#restaurants"><rect height="285" id="restaurants" width="682" x="11" y="1152.5"/></a>,
                <a href="/restaurant/test"><rect height="334" id="restaurant-test" width="683" x="10" y="1449.5"/></a>,
                <a href="#activities"><rect height="270" id="activities" width="686" x="14" y="1996.5"/></a>,
                <a href="/activity/test"><rect height="342" id="activity-test" width="689" x="13" y="2274.5"/></a>
              ]
            }} />
            <stencil-route url='/restaurant/:name' component='mu-svg-screen' componentProps={{
              src: '../../assets/restaurant.png',
              width: 689,
              height: 2160,
              links: [
                <a href="#menu"><rect height="84" id="menu" width="91" x="589" y="28"/></a>,
                <a href="#picture"><rect height="379" id="picture" width="663" x="17" y="750"/></a>,
                <a href="#map"><rect height="335" id="map" width="665" x="18" y="1371"/></a>,
                <a href="#book"><rect height="107" id="book" width="577" x="56" y="1999"/></a>
              ]
            }} />
            <stencil-route url='/activity/:name' component='mu-svg-screen' componentProps={{
              src: '../../assets/activity.png',
              width: 694,
              height: 1931,
              links: [
                <a href="#menu"><rect height="91" id="menu" width="84" x="600.5" y="16.5"/></a>,
                <a href="#picture"><rect height="328" id="picture" width="668" x="16.5" y="761.5"/></a>,
                <a href="#map"><rect height="382" id="map" width="667" x="14.5" y="1342.5"/></a>,
                <a href="#book"><rect height="102" id="book" width="569" x="62.5" y="1776.5"/></a>
              ]
            }} />
          </stencil-route-switch>
        </stencil-router>
      </main>
    );
  }
}
