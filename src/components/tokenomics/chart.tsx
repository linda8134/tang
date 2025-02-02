import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Developer Incentives', value: 10, color: '#3B82F6' },
  { name: 'Airdrops for AI Agent Deployers', value: 10, color: '#10B981' },
  { name: 'Ecosystem Partnerships', value: 20, color: '#6366F1' },
  { name: 'EAST Treasury', value: 60, color: '#F59E0B' },
];

const TokenomicsChart = () => {
  return (
    <motion.div 
      className="w-full h-[500px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={180}
            innerRadius={110}
            fill="#8884d8"
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                strokeWidth={2}
                stroke="#000"
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              borderRadius: '8px',
              padding: '12px'
            }}
            itemStyle={{ color: '#fff' }}
            formatter={(value: number) => [`${value}%`]}
          />
          <Legend
            layout="vertical"
            align="center"
            verticalAlign="middle"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{
              paddingLeft: '20px',
              fontSize: '12px'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default function Chart(){
  return (
    <div className="min-h-screen pt-20 bg-black">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Tokenomics
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Eastworld Token (EAST) is the native utility token of the EastWorld ecosystem, essential for facilitating transactions, incentivizing participation, and governing the platform. EAST ensures the sustainability and growth of EastWorld by aligning the interests of developers, users, and the broader community.
        </p>
        <p> Distribution Model Initial Total Supply: 1,000,000,000 EAST</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <TokenomicsChart />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">Developer Incentives - 10% (100,000,000 EAST):</h3>
            <p className="text-gray-400">Allocated to developers contributing to the EastWorld ecosystem, with a one-year cliff to ensure long-term commitment.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Airdrops for AI Agent Deployers - 10% (100,000,000 EAST)</h3>
            <p className="text-gray-400">Reserved for rewarding deployers of AI agents on EastWorld. Specific rules and criteria will be finalized through community votes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Ecosystem Partnerships - 20% (200,000,000 EAST)</h3>
            <p className="text-gray-400">Allocated for strategic alliances with other projects, platforms, and organizations to enhance the EastWorld ecosystem and drive adoption.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">EAST Treasury - 60% (600,000,000 EAST)</h3>
            <p className="text-gray-400">Managed by an AI agent, the Treasury will emit tokens without a hard cap. Inflation emissions will also be handled by this AI agent, with future rules to be determined through community votes.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  )
}
