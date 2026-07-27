// type: 'horizontal' | 'vertical'
export const Separator = ({ type = 'horizontal' }) => <div className={`bg-slate-300 dark:bg-slate-700 rounded-full ${type === 'horizontal' ? 'w-full h-px' : 'w-px self-stretch'}`} />

