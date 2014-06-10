class HomeController < ApplicationController

  def index
    @contact = Contact.new
    render 'home'
  end

  def create_contact
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Thank you for your message. We will contact you soon!'
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
    render 'home'
  end

end
