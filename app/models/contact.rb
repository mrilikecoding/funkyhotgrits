class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  attribute :message
  attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
        :subject => "Contact request from funkyhotgrits.com",
        :to => "nathanrgreen@gmail.com",
        :from => %("#{name}" <#{email}>)
    }
  end
end