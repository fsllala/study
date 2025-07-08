import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

// 创建一个场景
const scene = new THREE.Scene();
// 创建一个几何体 (x,y,z) 球体
const geometry = new THREE.SphereGeometry(100, 100, 100);

// 创建一个光源
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(200, 200, 200);
scene.add(light);

// 创建一个材质
const material = new THREE.MeshPhongMaterial({
  color: 0x00ff00, // 颜色
  shininess: 100, // 光泽度
  specular: 0xff0000, // 镜面反射颜色
  wireframe: true, // 线框
});

// 创建一个网格
const mesh = new THREE.Mesh(geometry, material);
// 将网格添加到场景中
scene.add(mesh);

// 辅助坐标轴
const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const width = 800;
const height = 600;
const camera = new THREE.PerspectiveCamera(75, width / height);

camera.position.set(200, 200, 200); // 设置相机位置
camera.lookAt(mesh.position); // 设置相机朝向
// 将相机添加到场景中 (相机在场景中)
scene.add(camera);
// 创建一个渲染器
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas') as HTMLCanvasElement, // 指定渲染的画布
  antialias: true, // 抗锯齿
});
renderer.setSize(width, height); // 设置渲染器尺寸

renderer.render(scene, camera); // 渲染场景

// 创建一个可以用鼠标控制的3D场景

/**
 * 创建了一个控制器，就像给相机安装了一个操作杆。这样你就可以用鼠标来旋转、缩放和平移3D场景了
 */
const controls = new OrbitControls(camera, renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate); //RAF 60帧 回调函数
  renderer.render(scene, camera);

  // 自动旋转
  mesh.rotation.y += 0.01;
  mesh.rotation.x += 0.01;
  // 改变颜色
  material.color.set(Math.random() * 0xffffff);

  controls.update(); // 更新控制器状态，检查你是否移动了鼠标，如果移动了就相应地调整相机位置
};
animate();
