import { motion } from 'framer-motion';

const AuroraBackground = () => {

  return (
    <div className="relative overflow-hidden z-0 w-full h-full">
      {/* 主要极光效果 */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(29, 78, 216, 0.15), transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(124, 58, 237, 0.15), transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(29, 78, 216, 0.15), transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(124, 58, 237, 0.15), transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* 移动的光斑 */}
      <motion.div
        animate={{
          x: [0, window.innerWidth * 0.8, 0],
          y: [0, window.innerHeight * 0.8, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15), transparent 70%)',
        }}
      />

      <motion.div
        animate={{
          x: [window.innerWidth, window.innerWidth * 0.2, window.innerWidth],
          y: [window.innerHeight, window.innerHeight * 0.2, window.innerHeight],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15), transparent 70%)',
        }}
      />

      {/* 静态渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black opacity-90" />
    </div>
  );
};

export default AuroraBackground; 