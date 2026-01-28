'use client';

export function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/license-certificate.pdf';
    link.download = 'Bella-Healthcare-OHCQ-License.pdf';
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 bg-bella-orange hover:bg-bella-orange/90 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
      </svg>
      Download PDF Certificate
    </button>
  );
}
