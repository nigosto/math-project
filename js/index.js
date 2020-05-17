// var scene = new THREE.Scene();
//         var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//         var renderer = new THREE.WebGLRenderer();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);
//         var controls = new THREE.OrbitControls(camera, renderer.domElement);

//         var geometry = new THREE.BoxGeometry(3, 3, 3);
//         var edges = new THREE.EdgesGeometry(geometry);
//         var lineSegments = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00ffff }));
//         scene.add(lineSegments);

//         var plainGeometry = new THREE.PlaneGeometry(5, 5, 5);
//         var material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
//         var plane = new THREE.Mesh(plainGeometry, material);
//         scene.add(plane);

//         plane.rotation.x = 0
//         plane.rotation.y = 0.78

//         if(plane.rotation.x === 0.5) {
//             alert('Congratulations')
//         }

//         camera.position.z = 5;

//         function animate() {
//             requestAnimationFrame(animate);
//             renderer.render(scene, camera);
//         }
//         animate();