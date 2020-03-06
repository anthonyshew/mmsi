import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import gsap from 'gsap'
import '../styles/_404.scss'

import Navbar from '../components/utils/Navbar/Navbar'
import Footer from '../components/utils/Footer/Footer'

const NoMatch = (props) => {

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Page Does Not Exist - Mission Mechanical Services Inc.</title>
                <meta name="description" content=" This page does not exist." />
            </Helmet>
            <Navbar />
            <div className="page-404">
                <p className="paragraph">Looks like this page has blown away...</p>
                <SVG />
            </div>
            <Footer
                backgroundColor="#131241"
                headerColor="#bfbfbf"
                linkColor="#bfbfbf"
            />
        </>
    )
}

export default NoMatch

const SVG = ({ ...props }) => {

    useEffect(() => {
        gsap.to('.blades', {
            duration: 3.5,
            ease: "none",
            rotate: 360,
            repeat: '100000000',
            transformOrigin: '51% 54%'
        })
    }, [])

    return (
        <>
            <svg className="fan" viewBox="0 0 544 544" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="11" y="11" width="522" height="522" rx="111" stroke="#999999" strokeWidth="22" />
                <path className="blades" d="M29.6484 210.89C62.2644 185.349 122.341 195.295 232.556 230.538C206.92 94.1138 229.101 47.0722 259 22C293.648 45.3142 302.62 106.313 303.027 223.867C422.734 159.042 473.76 165.662 506.575 186.182C495.707 224.243 445.512 250.83 345.211 284.762C437.727 374.567 446.569 423.711 437.406 460.414C396.348 461.893 353.956 419.259 286.487 327.55C226.115 456.465 179.967 481.987 140.631 484.725C126.555 446.187 153.908 392.788 220.082 300.517C82.1892 282.753 44.2639 247.097 29.6484 210.89Z" fill="black" />
                <circle cx="272" cy="272" r="80" fill="#3C3C3C" />
                <circle cx="272.5" cy="272.5" r="55.5" fill="#ACACAC" />
                <path d="M522 272C522 410.071 410.071 522 272 522C133.929 522 22 410.071 22 272C22 133.929 133.929 22 272 22C410.071 22 522 133.929 522 272ZM28.961 272C28.961 406.227 137.773 515.039 272 515.039C406.227 515.039 515.039 406.227 515.039 272C515.039 137.773 406.227 28.961 272 28.961C137.773 28.961 28.961 137.773 28.961 272Z" fill="#999999" />
                <path d="M255.799 274.256H251.319V282H240.631V274.256H226.103L225.015 266.64L238.135 242.256H251.319V265.616H256.247L255.799 274.256ZM240.951 265.616V255.824H240.567L235.319 265.616H240.951Z" fill="white" />
                <path d="M274.691 262.416V261.456C274.691 257.275 274.563 254.843 274.307 254.16C274.094 253.435 273.859 252.816 273.603 252.304C273.134 251.451 272.302 251.024 271.107 251.024C269.912 251.024 269.102 251.451 268.675 252.304C268.163 253.413 267.886 254.544 267.843 255.696C267.758 257.829 267.715 259.749 267.715 261.456V262.416C267.715 267.067 267.822 269.776 268.035 270.544C268.291 271.269 268.547 271.888 268.803 272.4C269.23 273.339 270.147 273.808 271.555 273.808C272.963 273.808 273.838 273.019 274.179 271.44C274.52 269.819 274.691 266.811 274.691 262.416ZM284.355 253.264C284.739 255.611 284.931 258.555 284.931 262.096C284.931 265.637 284.739 268.581 284.355 270.928C284.014 273.275 283.352 275.387 282.371 277.264C280.451 280.848 276.696 282.64 271.107 282.64C265.603 282.64 261.891 280.848 259.971 277.264C258.99 275.387 258.307 273.275 257.923 270.928C257.539 268.539 257.347 265.595 257.347 262.096C257.347 254.928 258.286 249.723 260.163 246.48C262.083 243.237 265.731 241.616 271.107 241.616C276.739 241.616 280.494 243.387 282.371 246.928C283.352 248.805 284.014 250.917 284.355 253.264Z" fill="white" />
                <path d="M317.549 274.256H313.069V282H302.381V274.256H287.853L286.765 266.64L299.885 242.256H313.069V265.616H317.997L317.549 274.256ZM302.701 265.616V255.824H302.317L297.069 265.616H302.701Z" fill="white" />
                <path d="M244.218 302H242.724V289.15H249.887V290.478H244.218V295.18H249.544V296.507H244.218V302Z" fill="white" />
                <path d="M257.727 302L257.437 300.629H257.366C256.886 301.232 256.405 301.643 255.925 301.859C255.45 302.07 254.855 302.176 254.141 302.176C253.186 302.176 252.436 301.93 251.891 301.437C251.352 300.945 251.082 300.245 251.082 299.337C251.082 297.392 252.638 296.372 255.749 296.278L257.384 296.226V295.628C257.384 294.872 257.22 294.315 256.892 293.958C256.569 293.595 256.051 293.413 255.336 293.413C254.533 293.413 253.625 293.659 252.611 294.151L252.163 293.035C252.638 292.777 253.156 292.575 253.719 292.429C254.287 292.282 254.855 292.209 255.424 292.209C256.572 292.209 257.422 292.464 257.973 292.974C258.529 293.483 258.808 294.301 258.808 295.426V302H257.727ZM254.431 300.972C255.339 300.972 256.051 300.723 256.566 300.225C257.088 299.727 257.349 299.029 257.349 298.133V297.263L255.89 297.324C254.73 297.365 253.892 297.547 253.376 297.869C252.866 298.186 252.611 298.681 252.611 299.354C252.611 299.882 252.77 300.283 253.086 300.559C253.408 300.834 253.856 300.972 254.431 300.972Z" fill="white" />
                <path d="M268.414 302V295.769C268.414 294.983 268.235 294.397 267.878 294.011C267.521 293.624 266.961 293.431 266.199 293.431C265.191 293.431 264.453 293.703 263.984 294.248C263.516 294.793 263.281 295.692 263.281 296.946V302H261.822V292.367H263.009L263.246 293.686H263.316C263.615 293.211 264.034 292.845 264.573 292.587C265.112 292.323 265.713 292.191 266.375 292.191C267.535 292.191 268.408 292.473 268.994 293.035C269.58 293.592 269.873 294.485 269.873 295.716V302H268.414Z" fill="white" />
                <path d="M283.276 290.302C281.864 290.302 280.748 290.773 279.928 291.717C279.113 292.654 278.706 293.94 278.706 295.575C278.706 297.257 279.099 298.558 279.884 299.478C280.675 300.392 281.8 300.849 283.259 300.849C284.155 300.849 285.178 300.687 286.326 300.365V301.675C285.436 302.009 284.337 302.176 283.03 302.176C281.138 302.176 279.676 301.602 278.645 300.453C277.619 299.305 277.106 297.673 277.106 295.558C277.106 294.233 277.353 293.073 277.845 292.077C278.343 291.081 279.058 290.313 279.989 289.774C280.927 289.235 282.028 288.966 283.294 288.966C284.642 288.966 285.819 289.212 286.827 289.704L286.194 290.987C285.222 290.53 284.249 290.302 283.276 290.302Z" fill="white" />
                <path d="M297.225 297.175C297.225 298.745 296.829 299.973 296.038 300.857C295.247 301.736 294.154 302.176 292.76 302.176C291.898 302.176 291.134 301.974 290.466 301.569C289.798 301.165 289.282 300.585 288.919 299.829C288.556 299.073 288.374 298.188 288.374 297.175C288.374 295.604 288.767 294.383 289.552 293.51C290.337 292.631 291.427 292.191 292.821 292.191C294.169 292.191 295.238 292.64 296.029 293.536C296.826 294.433 297.225 295.645 297.225 297.175ZM289.886 297.175C289.886 298.405 290.132 299.343 290.624 299.987C291.116 300.632 291.84 300.954 292.795 300.954C293.75 300.954 294.474 300.635 294.966 299.996C295.464 299.352 295.713 298.411 295.713 297.175C295.713 295.95 295.464 295.021 294.966 294.389C294.474 293.75 293.744 293.431 292.777 293.431C291.822 293.431 291.102 293.744 290.615 294.371C290.129 294.998 289.886 295.933 289.886 297.175Z" fill="white" />
                <path d="M299.58 301.068C299.58 300.676 299.668 300.38 299.844 300.181C300.025 299.976 300.283 299.873 300.617 299.873C300.957 299.873 301.221 299.976 301.408 300.181C301.602 300.38 301.698 300.676 301.698 301.068C301.698 301.449 301.602 301.742 301.408 301.947C301.215 302.152 300.951 302.255 300.617 302.255C300.318 302.255 300.069 302.164 299.87 301.982C299.677 301.795 299.58 301.49 299.58 301.068Z" fill="white" />
                <path d="M270.5 192V12M312.701 203.135L397.201 56.7763M202.679 232.254L56.3208 147.754M237.13 200.179L152.63 53.8208M344.25 238.201L490.608 153.701M310.299 342.119L394.799 488.477M341.75 310.701L488.108 395.201M234.049 342.224L149.549 488.582M204.429 314.702L58.9368 398.702M270.5 532V352M352 270.5H532M12 270.5H192M382 272C382 332.751 332.751 382 272 382C211.249 382 162 332.751 162 272C162 211.249 211.249 162 272 162C332.751 162 382 211.249 382 272ZM164.2 272C164.2 331.536 212.464 379.8 272 379.8C331.536 379.8 379.8 331.536 379.8 272C379.8 212.464 331.536 164.2 272 164.2C212.464 164.2 164.2 212.464 164.2 272ZM442 272C442 365.888 365.888 442 272 442C178.112 442 102 365.888 102 272C102 178.112 178.112 102 272 102C365.888 102 442 178.112 442 272ZM105.4 272C105.4 364.011 179.989 438.6 272 438.6C364.011 438.6 438.6 364.011 438.6 272C438.6 179.989 364.011 105.4 272 105.4C179.989 105.4 105.4 179.989 105.4 272ZM457 272C457 374.173 374.173 457 272 457C169.827 457 87 374.173 87 272C87 169.827 169.827 87 272 87C374.173 87 457 169.827 457 272ZM90.7 272C90.7 372.129 171.871 453.3 272 453.3C372.129 453.3 453.3 372.129 453.3 272C453.3 171.871 372.129 90.7 272 90.7C171.871 90.7 90.7 171.871 90.7 272ZM472 272C472 382.457 382.457 472 272 472C161.543 472 72 382.457 72 272C72 161.543 161.543 72 272 72C382.457 72 472 161.543 472 272ZM76 272C76 380.248 163.752 468 272 468C380.248 468 468 380.248 468 272C468 163.752 380.248 76 272 76C163.752 76 76 163.752 76 272ZM487 272C487 390.741 390.741 487 272 487C153.259 487 57 390.741 57 272C57 153.259 153.259 57 272 57C390.741 57 487 153.259 487 272ZM61.3 272C61.3 388.366 155.634 482.7 272 482.7C388.366 482.7 482.7 388.366 482.7 272C482.7 155.634 388.366 61.3 272 61.3C155.634 61.3 61.3 155.634 61.3 272ZM504 272C504 400.13 400.13 504 272 504C143.87 504 40 400.13 40 272C40 143.87 143.87 40 272 40C400.13 40 504 143.87 504 272ZM44.64 272C44.64 397.567 146.433 499.36 272 499.36C397.567 499.36 499.36 397.567 499.36 272C499.36 146.433 397.567 44.64 272 44.64C146.433 44.64 44.64 146.433 44.64 272ZM412 272C412 349.32 349.32 412 272 412C194.68 412 132 349.32 132 272C132 194.68 194.68 132 272 132C349.32 132 412 194.68 412 272ZM134.8 272C134.8 347.773 196.227 409.2 272 409.2C347.773 409.2 409.2 347.773 409.2 272C409.2 196.227 347.773 134.8 272 134.8C196.227 134.8 134.8 196.227 134.8 272ZM367 272C367 324.467 324.467 367 272 367C219.533 367 177 324.467 177 272C177 219.533 219.533 177 272 177C324.467 177 367 219.533 367 272ZM178.9 272C178.9 323.418 220.582 365.1 272 365.1C323.418 365.1 365.1 323.418 365.1 272C365.1 220.582 323.418 178.9 272 178.9C220.582 178.9 178.9 220.582 178.9 272ZM397 272C397 341.036 341.036 397 272 397C202.964 397 147 341.036 147 272C147 202.964 202.964 147 272 147C341.036 147 397 202.964 397 272ZM149.5 272C149.5 339.655 204.345 394.5 272 394.5C339.655 394.5 394.5 339.655 394.5 272C394.5 204.345 339.655 149.5 272 149.5C204.345 149.5 149.5 204.345 149.5 272ZM427 272C427 357.604 357.604 427 272 427C186.396 427 117 357.604 117 272C117 186.396 186.396 117 272 117C357.604 117 427 186.396 427 272ZM120.1 272C120.1 355.892 188.108 423.9 272 423.9C355.892 423.9 423.9 355.892 423.9 272C423.9 188.108 355.892 120.1 272 120.1C188.108 120.1 120.1 188.108 120.1 272Z" stroke="#999999" strokeWidth="2" />
            </svg>
        </>
    )
}