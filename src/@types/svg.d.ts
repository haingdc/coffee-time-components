declare module "*.svg" {
  const content: any; // Hoặc sử dụng ` React.FunctionComponent<React.SVGProps<SVGSVGElement>>` nếu bạn muốn hơn
  export default content;
}