// variant: 'horizontal' | 'vertical'
export const Separator = ({ variant = 'horizontal' }) => <div className={`bg-slate-300 dark:bg-slate-700 rounded-full ${variant === 'horizontal' ? 'w-full h-px' : 'w-px self-stretch'}`} />

