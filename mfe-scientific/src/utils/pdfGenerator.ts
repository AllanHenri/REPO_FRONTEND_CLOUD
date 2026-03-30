import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const generateCertificate = async (
  userName: string,
  paperTitle: string,
  role: 'author' | 'reviewer',
): Promise<void> => {
  const element = document.createElement('div')
  element.style.backgroundColor = 'white'
  element.style.padding = '40px'
  element.style.textAlign = 'center'
  element.style.fontFamily = 'Arial, sans-serif'
  element.style.width = '800px'
  element.innerHTML = `
    <div style="border: 3px solid #3B82F6; border-radius: 8px; padding: 40px; background: linear-gradient(to bottom, #f0f9ff, #ffffff);">
      <p style="font-size: 12px; color: #666; margin-bottom: 20px; letter-spacing: 2px;">CERTIFICADO DE PARTICIPAÇÃO</p>
      <h1 style="font-size: 32px; color: #3B82F6; margin: 20px 0;">🎓 Congresso Acadêmico EduEvents</h1>
      
      <p style="font-size: 14px; color: #666; margin-top: 30px; margin-bottom: 10px;">Certificamos que</p>
      <p style="font-size: 20px; font-weight: bold; color: #1a37b7; margin: 15px 0;">${userName}</p>
      
      <p style="font-size: 14px; color: #666; margin-top: 20px;">
        ${role === 'author' ? 'apresentou o trabalho científico' : 'atuou como avaliador do trabalho'}
      </p>
      <p style="font-size: 16px; font-weight: bold; color: #333; margin: 15px 0; font-style: italic;">"${paperTitle}"</p>
      
      <p style="font-size: 12px; color: #666; margin-top: 30px;">
        Data de conclusão: ${new Date().toLocaleDateString('pt-BR')}
      </p>
      
      <div style="margin-top: 40px; border-top: 2px solid #3B82F6; padding-top: 20px;">
        <p style="font-size: 12px; color: #666;">Assinado digitalmente pela Comissão Organizadora</p>
      </div>
    </div>
  `

  document.body.appendChild(element)

  const canvas = await html2canvas(element, {
    backgroundColor: '#fff',
  })
  const pdf = new jsPDF('landscape', 'mm', 'a4')
  const imgData = canvas.toDataURL('image/png')
  pdf.addImage(imgData, 'PNG', 0, 0, 297, 210)
  pdf.save(`certificado_${userName.replace(/\s+/g, '_')}.pdf`)

  document.body.removeChild(element)
}
