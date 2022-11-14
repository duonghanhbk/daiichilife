import { useContext, useRef } from 'react'
import classNames from 'classnames'
import EmailJs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import { ActionType, AppContext } from 'context'

const Modal = () => {
    const form = useRef(null)
    const { state, dispatch } = useContext(AppContext)

    const sendEmail = (e: any) => {
        e.preventDefault()
        if (form?.current) {
            EmailJs.sendForm('service_s44oms8', 'template_vvn7fzf', form.current, 'vMrlm9l2bL3dmWrbW').then(
                (result) => {
                    if (result.status === 200) {
                        dispatch({ type: ActionType.CloseModal })
                        toast.success('Chúng tôi đã nhận được thông tin từ bạn. Chuyên viên tư vấn sẽ liên hệ với bạn để tư vấn.', {
                            duration: 3000,
                        })
                        e.target?.reset()
                    }
                },
                (error) => {
                    if (error) {
                        toast.error('Thông tin đăng ký không thành công. Vui lòng thử lại', { duration: 3000 })
                    }
                },
            )
        }
    }
    return (
        <div className={classNames('modal popup_pro', state.isOpenModal && 'is-active')}>
            <div className="modal-background" />
            <div className="modal-card">
                <button
                    type="button"
                    className="delete close-modal donglai_popup"
                    aria-label="close"
                    onClick={() => dispatch({ type: ActionType.CloseModal })}
                >
                    Đóng lại
                </button>
                <section className="modal-card-body sidebar">
                    <div className="widget">
                        <h3 className="widget-title">Đăng ký tư vấn</h3>
                        <div className="widget-content">
                            <form className="phone-call-register9999" ref={form} onSubmit={sendEmail} acceptCharset="UTF-8" method="post">
                                <input type="hidden" name="_token" defaultValue="PwWILy1IcNERZcgRpsc7faFydGt02ZiltCrmUNet" />
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input"
                                            placeholder="Họ và Tên"
                                            required
                                            type="text"
                                            name="name"
                                            id="contact_name"
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user" />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input"
                                            placeholder="Số điện thoại"
                                            required
                                            type="tel"
                                            name="phone"
                                            id="contact_phone"
                                            pattern="(\+84|0){1}(9|8|7|5|3){1}[0-9]{8}"
                                            autoComplete="off"
                                        />
                                        <span className="icon is-left">
                                            <i className="fas fa-phone" />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input"
                                            placeholder="Tỉnh / Thành phố"
                                            type="text"
                                            name="address"
                                            id="contact_address"
                                        />
                                        <span className="icon is-left">
                                            <i className="fas fa-map-marker-alt" />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <textarea
                                            className="textarea"
                                            placeholder="Chúng tôi có thể liên hệ bạn vào khoảng thời gian nào? Bạn đang có nhu cầu mua BH cho ai? ..."
                                            name="content"
                                            id="contact_note"
                                            defaultValue=""
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button type="submit" className="button is-success">
                                            Nhận tư vấn miễn phí
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <p />
                </section>
            </div>
        </div>
    )
}

export default Modal
