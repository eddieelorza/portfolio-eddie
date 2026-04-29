import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';


const WEB3FORMS_ACCESS_KEY =  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

console.log('ENV:', import.meta.env);

export default function ContactForm({ onSuccess }) {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const update = (k) => (e) =>
    setData((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    try {
      const formData = new FormData();

      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', `[Portfolio] ${data.subject || 'Mensaje'}`);
      formData.append('message', data.message);

      // Anti-spam honeypot
      formData.append('botcheck', '');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        setStatus('sent');

        setData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setTimeout(() => onSuccess?.(), 900);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const fields = [
    { key: 'name', label: f.name, ph: f.namePh, type: 'text', span: 1 },
    { key: 'email', label: f.email, ph: f.emailPh, type: 'email', span: 1 },
    { key: 'subject', label: f.subject, ph: f.subjectPh, type: 'text', span: 2 },
  ];

  return (
    <form onSubmit={submit} className="space-y-4">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map((field, i) => (
          <motion.div
            key={field.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
            className={field.span === 2 ? 'sm:col-span-2' : ''}
          >
            <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
              {field.label}
            </label>
            <input
              type={field.type}
              required
              value={data[field.key]}
              onChange={update(field.key)}
              placeholder={field.ph}
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/30 transition focus:border-white/30 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent)/0.4)]"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.3 }}
      >
        <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
          {f.message}
        </label>
        <textarea
          required
          rows={4}
          value={data.message}
          onChange={update('message')}
          placeholder={f.messagePh}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/30 transition focus:border-white/30 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent)/0.4)]"
        />
      </motion.div>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-300">
          <AlertCircle className="h-4 w-4" />
          No se pudo enviar. Intenta de nuevo.
        </p>
      )}

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
        whileTap={{ scale: status === 'idle' ? 0.97 : 1 }}
        className="btn-accent group relative w-full justify-center disabled:opacity-70"
      >
        {status === 'sent' ? (
          <>
            <Check className="h-4 w-4" />
            {f.success}
          </>
        ) : status === 'sending' ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            {f.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
            {f.submit}
          </>
        )}
      </motion.button>
    </form>
  );
}