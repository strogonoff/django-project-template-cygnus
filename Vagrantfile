# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.network :forwarded_port, guest: 80, host: 8081, host_ip: "127.0.0.1"
  config.vm.network :forwarded_port, guest: 8000, host: 8001, host_ip: "127.0.0.1"

  config.vm.network :forwarded_port, guest: 22, host: 2522, auto_correct: false, id: "ssh"

  config.vm.box_check_update = false

  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.synced_folder "..", "/home/ubuntu/{{ project_name }}", owner: "ubuntu", group: "ubuntu", create: true

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  # Note: Might better be initialized in the playbook
  config.vm.provision "shell", inline: <<-SHELL
    sudo rm -rf /var/lib/apt/lists/*
    sudo apt-get clean
    sudo apt-get update
    sudo apt-get install -y python-dev
  SHELL

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "site.yaml"
    ansible.inventory_path = "vagrant-inventory/hosts.ini"
    ansible.raw_arguments = ['-vv']
  end
end
