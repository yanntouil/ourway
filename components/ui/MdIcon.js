import React from 'react'

import VueIcon from 'assets/images/icons/brands/vuejs.svg'
import AngularIcon from 'assets/images/icons/brands/angular.svg'
import YoutubeIcon from 'assets/images/icons/brands/youtube.svg'
import MapMarkerAltIcon from 'assets/images/icons/regular/map-marker-alt.svg'
import SunCloudIcon from 'assets/images/icons/regular/sun-cloud.svg'


export default function MdIcon({ icon }) {
    console.log(icon);
    switch (icon) {
        case 'vue': return (<VueIcon className="inline-flex w-4 h-4 fill-current"/>)
        case 'angular': return (<AngularIcon className="inline-flex w-4 h-4 fill-current"/>)
        case 'youtube': return (<YoutubeIcon className="inline-flex w-4 h-4 fill-current"/>)
        case 'mapMarkerAlt': return (<MapMarkerAltIcon className="inline-flex w-4 h-4 fill-current"/>)
        case 'sunCloud': return (<SunCloudIcon className="inline-flex w-4 h-4 fill-current"/>)
        default : return (<></>)
    }
}
