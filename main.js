let scene = document.querySelector('a-scene')
        let model = document.createElement('a-entity')
        model.setAttribute('scale', `3 3 3`)
        model.setAttribute('name', 'Etienne Veranda')
        model.setAttribute('gps-entity-place', `latitude: 48.86081; longitude: 2.373893;`)
        model.setAttribute('gltf-model', './assets/Flamingo.glb')
        model.setAttribute('animation-mixer', '')
        scene.appendChild(model)
